import React from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'redux'

import { renderMdast } from 'mdast-react-render'
import { NEWSLETTER_ID, PUBLIC_BASE_URL } from '../lib/publicEnv'

import Layout, { Paragraph, List, ListItem } from '../src/Layout'
import { createNewsletterWebSchema, Loader, Center, colors } from '@project-r/styleguide'
import { splitByTitle } from '../src/utils/helpers'
import StatusError from '../src/StatusError'
import { css } from 'glamor'
import { withRouter } from 'next/router'
import { cleanAsPath } from '../lib/url'

const schema = createNewsletterWebSchema({ Paragraph, List, ListItem })

export const getDocument = gql`
  query getDocument($path: String!) {
    newsletter: document(path: $path) {
      content
      meta {
        publishDate
        prepublication
        slug
        path
        title
        description
        image
        facebookTitle
        facebookImage
        facebookDescription
        twitterTitle
        twitterImage
        twitterDescription
        seoTitle
        seoDescription
        shareText
        shareFontSize
        shareInverted
        shareTextPosition
        format {
          meta {
           externalBaseUrl
          }
        }
      }
    }
  }
`

const styles = {
  prepub: css({
    position: 'absolute',
    background: colors.social,
    width: '100%',
    padding: '2px 5px',
    color: '#ffffff',
    zIndex: 10
  })
}

const Newsletter = ({ newsletter }) => {
  const meta = {
    ...newsletter.meta,
    url: `${PUBLIC_BASE_URL}${newsletter.meta.path}`
  }
  const splitContent = splitByTitle(newsletter.content)
  return <Layout raw meta={meta}>
    {meta.prepublication && <div {...styles.prepub}>Editoren-Vorschau</div>}
    {splitContent.title && (
      <>
        {renderMdast(splitContent.title, schema)}
        <Center>
          <h1>
            {meta.title}
          </h1>
          <p><b>
            {meta.description}
          </b></p>
        </Center>
      </>
    )}
    {renderMdast(splitContent.main, schema)}
  </Layout>
}

const Index = ({ data: {loading, error, newsletter}, serverContext }) => <Loader
  loading={loading}
  error={error}
  render={() => newsletter ?
    <Newsletter newsletter={newsletter} /> :
    <StatusError serverContext={serverContext} />
  }
/>

export default compose(
  withRouter,
  graphql(getDocument, {
    options: ({ router }) => ({
      variables: {
        path: cleanAsPath(router.asPath)
      }
    }),
    props: ({data, ownProps: {serverContext}}) => {
      if (serverContext && !data.error && !data.loading && !data.newsletter) {
        serverContext.res.statusCode = 404
      }
      if (data?.newsletter && !(data.newsletter.meta.format?.meta.externalBaseUrl || '').startsWith(PUBLIC_BASE_URL)) {
        return {
          data: {
            ...data,
            newsletter: null
          },
        }
      }
      return {
        data
      }
    }
  })
)(Index)
