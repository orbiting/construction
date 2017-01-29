import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../src/Layout'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Project R Medieninformation</title>
      </Head>
      <h1>Medieninformation</h1>
      
      <p>
        <Link href='/media/2017-01-10-hotel-rothaus'><a>Project R stellt Aufbau-Crew vor und zieht ins Hotel Rothaus</a></Link>
      </p>

      <p>Finden Sie mehr unter: <Link href='/'><a>project-r.construction</a></Link></p>
    </Layout>
  )
}