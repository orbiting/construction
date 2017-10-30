import React from 'react'
import Head from 'next/head'

import Layout from '../../src/Layout'

export default ({url}) => {
  return (
    <Layout url={url}>
      <Head>
        <title>Project R Newsletter</title>
      </Head>
      <h2>
        {url.query.message
          ? url.query.message
          : 'Welcome aboard!'}
      </h2>
    </Layout>
  )
}
