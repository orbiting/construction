import React, { Component, useMemo } from 'react'
import Head from 'next/head'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'redux'
import withData from '../../lib/apollo/withData'

import { renderMdast } from 'mdast-react-render'
import { NEWSLETTER_ID, PUBLIC_BASE_URL } from '../../lib/publicEnv'

import Layout, { Paragraph, List, ListItem } from '../../src/Layout'
import { createNewsletterWebSchema, Loader, Center } from '@project-r/styleguide'
import Grid, { GridItem } from '../../src/Grid'
import Card from '../../src/Card'
import { splitByTitle } from '../../src/utils/helpers'

const schema = createNewsletterWebSchema({ Paragraph, List, ListItem })

export const getDocument = gql`
  query getDocument($path: String!) {
    newsletter: document(path: $path) {
      content
      meta {
        publishDate
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
      }
    }
  }
`

const NotFound = ({ url }) => <Layout url={url}>
  <Head>
    <title>404</title>
  </Head>
  <h1>404</h1>
  <p>Seite nicht gefunden.</p>
</Layout>

const Newsletter = ({ newsletter, url }) => {
  const meta = {
    ...newsletter.meta,
    url: `${PUBLIC_BASE_URL}${newsletter.meta.path}`
  }
  const splitContent = splitByTitle(newsletter.content)
  return <Layout raw meta={meta} url={url}>
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

const Index = ({ data: {loading, error, newsletter}, url }) => <Loader
  loading={loading}
  error={error}
  render={() => newsletter ? <Newsletter newsletter={newsletter} url={url} />  : <NotFound url={url} />
  }
/>

export default compose(
  withData,
  graphql(getDocument, {
    options: ({ url }) => ({
      variables: {
        path: url?.query ? `/${url.query.path}` : ''
      }
    })
  })
)(Index)
