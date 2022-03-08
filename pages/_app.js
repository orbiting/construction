import App from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Head from 'next/head'

import withApolloClient from '../lib/apollo/withClient'

class WebApp extends App {
  render() {
    const { Component, pageProps, apolloClient, url, serverContext } =
      this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1'
          />
        </Head>
        <Component serverContext={serverContext} url={url} {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApolloClient(WebApp)