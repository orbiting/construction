import React from 'react'
import Head from 'next/head'

import Layout from '../src/Layout'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const media = [
  {
    href: '/media/2017-03-14-aufbau',
    title: 'Der Bauplan von Project R steht',
    date: 'Zürich, 15. März 2017',
    image: {
      src: 'https://assets.project-r.construction/images/enterprise-with-hand.jpg',
      alt: 'Konzernmodell: Project R und Magazin auf Papier'
    }
  },
  {
    href: '/media/2017-01-10-hotel-rothaus',
    title: 'Project R stellt Aufbau-Crew vor und zieht ins Hotel Rothaus',
    date: 'Zürich, 10. Januar 2017',
    image: {
      src: 'https://assets.project-r.construction/images/rothaus_thumb.jpg',
      alt: 'Das Hotel Rothaus von aussen'
    }
  }
]

export default ({url}) => {
  return (
    <Layout url={url}>
      <Head>
        <title>Project R Medieninformationen</title>
      </Head>
      <h1>Medieninformationen</h1>

      <Grid>
        {media.map((newsletter, i) => (
          <GridItem key={i}>
            <Card {...newsletter} />
          </GridItem>
        ))}
      </Grid>

      <h3>Medienartikel zu Project R</h3>

      <ul>
        <li><a href='http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit'>«Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a> <em>Oktober 2016</em></li>
        <li><a href='http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger'>Und ewig sparen die Verleger</a> <em>Oktober 2016</em></li>
        <li><a href='http://presseverein.ch/2016/10/09/die-rebellion-beginnt/'>Die Rebellion beginnt</a> <em>Oktober 2016</em></li>
      </ul>
    </Layout>
  )
}
