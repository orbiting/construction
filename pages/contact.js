import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Link from 'next/link'
import Newsletter from '../src/Newsletter'

import {susanne, laurent} from '../src/data/team'

export default ({url}) => {
  const meta = {
    title: 'Newsletter von Project R',
    description: 'Jetzt E-Mail-Adresse eintragen und auf dem Laufenden bleiben',
    image: 'https://assets.project-r.construction/images/rothaus.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/rothaus.jpg',
        alt: 'Das Hotel Rothaus an der Langstrasse mit einem Project R Logo auf dem Balkon'}}
      >
        <h1>Newsletter und Kontakt</h1>
      </Cover>
    )}>
      <p>Wenn Sie informiert bleiben wollen, bitte hier für den Newsletter eintragen:</p>

      <Newsletter />

      <p>Danke!</p>

      <p>Mehr zu Project R: <Link href='/'><a>project-r.construction</a></Link></p>

      <p><strong>E-Mail</strong><br />
        <a href='mailto:office@project-r.construction'>office@project-r.construction</a><br />
      PGP-Key-ID: 6A1DB6B9<br />
        <a href='https://assets.project-r.construction/contact/0x6A1DB6B9_office.asc'>Key herunterladen</a>
      </p>

      <p><strong>Geschäftsführung</strong><br />
      Susanne Sugimoto, +41 78 897 70 28<br />
        <a href={`mailto:${susanne.email}`}>{susanne.email}</a>
      </p>

      <p><strong>Investor Relations</strong><br />
      Laurent Burst<br />
        <a href={`mailto:${laurent.email}`}>{laurent.email}</a>
      </p>

    </Layout>
  )
}
