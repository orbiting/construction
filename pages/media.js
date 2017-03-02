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

      <ul>
        <li>
          Zürich, 10. Januar 2017<br />
          <Link href='/media/2017-01-10-hotel-rothaus'><a>Project R stellt Aufbau-Crew vor und zieht ins Hotel Rothaus</a></Link>
        </li>
      </ul>

      <h3>Medienartikel zu Project R</h3>

      <ul>
        <li><a href='http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit'>Interview: «Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a></li>
        <li><a href='http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger'>Und ewig sparen die Verleger</a></li>
        <li><a href='http://presseverein.ch/2016/10/09/die-rebellion-beginnt/'>Die Rebellion beginnt</a></li>
      </ul>
    </Layout>
  )
}
