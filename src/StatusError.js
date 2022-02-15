import React from 'react'
import { Loader } from '@project-r/styleguide'
import { compose } from 'redux'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Layout from './Layout'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { cleanAsPath } from '../lib/url'
import { PUBLIC_BASE_URL } from '../lib/publicEnv'

const getRedirect = gql`
  query getRedirect($path: String!) {
    redirection(path: $path) {
      target
      status
    }
  }
`

const StatusError = ({ loading }) => (
  <Loader
    loading={loading}
    render={() => (
      <Layout>
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
  withRouter,
  graphql(getRedirect, {
    options: ({ router }) => ({
      variables: {
        path: `${PUBLIC_BASE_URL}${cleanAsPath(router.asPath)}`
      }
    }),
    props: ({
      data,
      ownProps: {
        serverContext
      },
    }) => {
      const redirection = !data.error && !data.loading && data.redirection
      if (redirection) {
        const { target, status } = redirection
        serverContext.res.redirect(status || 302, target)
        return { loading: true }
      } else if (serverContext) {
        serverContext.res.statusCode = 404
      }
      return { loading: false }
    },
  }),
)(StatusError)
