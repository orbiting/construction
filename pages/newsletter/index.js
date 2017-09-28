import React, { Component } from 'react'

import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import withData from '../../lib/apollo/withData'
import { renderMdast } from '../../src/Templates'
import newsletterSchema from '../../src/Templates/Newsletter'
import { PUBLIC_BASE_URL } from '../../lib/settings'

import Layout from '../../src/Layout'

const getDocument = gql`
  query getDocument($slug: String!) {
    newsletter: document(slug: $slug) {
      content
      meta {
        slug
        title
        description
        image
        facebookDescription
        facebookImage
        facebookTitle
        twitterDescription
        twitterImage
        twitterTitle
      }
    }
  }
`

class Index extends Component {
  render () {
    const { data: {loading, error, newsletter}, url } = this.props

    if (loading) {
      return null
    }
    if (error) {
      return <div>{error.toString()}</div>
    }
    if (!newsletter) {
      return <div>404</div>
    }
    const meta = {
      ...newsletter.meta,
      url: `${PUBLIC_BASE_URL}${url.pathname}/${url.query.slug}`
    }
    return (
      <Layout raw meta={meta} url={url}>
        {renderMdast(newsletter.content, newsletterSchema)}
      </Layout>
    )
  }
}

export default compose(
  withData,
  graphql(getDocument, {
    options: props => ({
      variables: {
        slug: props.url.query.slug
      }
    })
  })
)(Index)
