import React from 'react'
import {css} from 'glamor'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Link from 'next/link'
import {RawPortrait} from '../src/Portrait'
import Newsletter from '../src/Newsletter'
import SocialMedia from '../src/SocialMedia'

import {susanne, clara, laurent} from '../src/data/team'

export default () => {
  const meta = {
    title: 'Newsletter von Project R',
    description: 'Jetzt E-Mail-Adresse eintragen und auf dem Laufenden bleiben',
    image: 'https://assets.project-r.construction/images/rothaus.jpg',
    url: 'https://project-r.construction/contact'
  }

  return (
    <Layout meta={meta} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/rothaus.jpg',
        alt: 'Das Hotel Rothaus an der Langstrasse mit einem Project R Logo auf dem Balkon'}}
      >
        <h1>Newsletter und Kontakt</h1>
      </Cover>
    )}>
      <h2>Newsletter</h2>
      <p>Wenn Sie informiert bleiben wollen, bitte hier eintragen:</p>

      <Newsletter />

      <p>Danke!</p>

      <p>Mehr zu Project R: <Link href='/'><a>project-r.construction</a></Link></p>

      <SocialMedia />

      <h2>Kontakt</h2> 

      <p>Postadresse:<br />
      Project R<br />
      c/o Hotel Rothaus<br />
      Sihlhallenstrasse 1<br />
      CH-8004 Zürich
      </p>
      <img style={{maxWidth: 50}} src='https://assets.project-r.construction/images/project_r_logo.svg' />

      <p>Spendenkonto:<br />
      Verein für unabhängigen Journalismus<br />
      Hegifeldstrasse 57<br />
      8404 Winterthur<br />
      Raiffeisenbank Winterthur<br />
      IBAN: CH12 8148 5000 0082 2840 1
      </p>

      <p><strong>E-Mail</strong><br />
      <a href="mailto:office@project-r.construction">office@project-r.construction</a><br />
      PGP-Key-ID: 6A1DB6B9<br />
      <a href="https://assets.project-r.construction/contact/0x6A1DB6B9_office.asc">Key herunterladen</a> 
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
