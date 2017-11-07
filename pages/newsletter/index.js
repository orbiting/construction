import React, { Component } from 'react'
import Head from 'next/head'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'redux'
import withData from '../../lib/apollo/withData'

import { renderMdast } from 'mdast-react-render'
import newsletterSchema from '@project-r/template-newsletter'
import { PUBLIC_BASE_URL } from '../../lib/publicEnv'

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
      return <Layout url={url}><p>Lädt…</p></Layout>
    }
    if (error) {
      return (
        <Layout url={url}>
          <h1>Nicht verfügbar</h1>
          <p>Bitte versuchen Sie es später nochmals.</p>
        </Layout>
      )
    }
    if (!newsletter) {
      return (
        <Layout url={url}>
          <Head>
            <title>404</title>
          </Head>
          <h1>404</h1>
          <p>Seite nicht gefunden.</p>
        </Layout>
      )
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
        slug: props.url.query.slug || ''
      }
    }),
    props: ({data, ownProps: {serverContext}}) => {
      if (serverContext && !data.error && !data.loading && !data.newsletter) {
        serverContext.res.statusCode = 404
      }

      return {
        data
      }
    }
  })
)(Index)
