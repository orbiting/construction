import React from 'react'
import Head from 'next/head'
import {css} from 'glamor'

import Layout from '../../src/Layout'

const welcomeStyle = css({
  textAlign: 'center'
})

export default () => {
  return (
    <Layout>
      <Head>
        <title>Project R Newsletter</title>
      </Head>
      <h2 {...welcomeStyle}>Welcome aboard!</h2>
    </Layout>
  )
}
