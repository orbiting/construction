import React, { Fragment } from 'react'
import { Loader } from '@project-r/styleguide'
import { compose } from 'redux'
import withData from '../lib/apollo/withData'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Layout from './Layout'
import Head from 'next/head'

const getRedirect = gql`
  query getRedirect($path: String!) {
    redirection(path: $path) {
      target
      status
    }
  }
`

const StatusError = ({ url, loading, prefix }) => (
  <Loader
    loading={loading}
    render={() => (
      <Layout url={url}>
        <Head>
          <title>404</title>
        </Head>
        <h1>404</h1>
        <p>Seite nicht gefunden.</p>
      </Layout>
    )}
  />
)

export default compose(
  withData,
  graphql(getRedirect, {
    options: ({ url }) => ({
      variables: {
        path: url.query.path,
      }
    }),
    props: ({
      data,
      ownProps: {
        serverContext,
        url,
        prefix
      },
    }) => {
      const redirection = !data.error && !data.loading && data.redirection
      if (redirection) {
        const { target, status } = redirection
        const completeTarget = `${prefix}${target}`
        serverContext.res.redirect(status || 302, completeTarget)
        return { loading: true }
      } else if (serverContext) {
        serverContext.res.statusCode = 404
      }
      return { loading: false }
    },
  }),
)(StatusError)
