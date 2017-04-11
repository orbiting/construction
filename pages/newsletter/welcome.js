import React from 'react'
import Head from 'next/head'
import {css} from 'glamor'

import Layout from '../../src/Layout'

const welcomeStyle = css({
  textAlign: 'center'
})

export default ({url}) => {
  return (
    <Layout url={url}>
      <Head>
        <title>Project R Newsletter</title>
      </Head>
      <h2 {...welcomeStyle}>
        {url.query.message
          ? url.query.message
          : 'Welcome aboard!'}
      </h2>
    </Layout>
  )
}
