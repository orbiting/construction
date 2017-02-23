import React from 'react'
import {css} from 'glamor'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Link from 'next/link'
import {RawPortrait} from '../src/Portrait'
import Newsletter from '../src/Newsletter'

import team from '../src/data/team'

const clara = team.filter(p => p.name === 'Clara Vuillemin')[0]
const susanne = team.filter(p => p.name === 'Susanne Sugimoto')[0]
const laurent = team.filter(p => p.name === 'Laurent Burst')[0]

const buttinLinkStyle = css({
  display: 'inline-block',
  fontFamily: 'sans-serif',
  verticalAlign: 'bottom',
  color: '#444',
  padding: '10px 20px 10px 20px',
  border: 'solid #444 1px',
  textDecoration: 'none',
  backgroundColor: 'white',
  fontSize: 14,
  height: 37,
  boxSizing: 'border-box',
  minWidth: 110,
  ':hover': {
    background: '#444',
    color: 'white !important'
  }
})

export default () => {
  const meta = {
    title: 'Newsletter von Project R',
    description: 'Jetzt E-Mail-Adresse eintragen und auf dem Laufenden bleiben',
    image: 'https://assets.project-r.construction/images/wewantyou.jpg',
    url: 'https://project-r.construction/contact'
  }

  return (
    <Layout meta={meta} cover={(
      <Cover image={{
        credit: '',
        src: 'https://assets.project-r.construction/images/wewantyou.jpg',
        alt: 'Das Project R Team auf dem Balkon des Hotel Rothaus'}}
      >
        <h1>Newsletter und Kontakt</h1>
      </Cover>
    )}>

      <p>Wenn Sie informiert bleiben wollen, bitte hier Ihre E-Mail-Adresse eintragen:</p>

      <Newsletter />

      <p>Danke!</p>

      <p>Mehr zu Project R finden Sie hier: <Link href='/'><a>project-r.construction</a></Link></p>

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

      <p>E-Mail-Adresse:<br />
      <a href="mailto:office@project-r.construction">office@project-r.construction</a><br />
      PGP-Key-ID: 6A1DB6B9 oder Key <a href="https://assets.project-r.construction/pgp/jefferson@project-r.construction_0x5BB9486F.asc">hier</a> herunterladen. 
      </p>

      <p>Geschäftsführung:<br />
      Susanne Sugimoto, +41 78 897 70 28<br />
      <a href={`mailto:${susanne.email}`}>{susanne.email}</a>
      </p>
      
      <p>Investor Relations:<br />
      Laurent Burst<br />
      <a href={`mailto:${laurent.email}`}>{laurent.email}</a>
      </p>


    </Layout>
  )
}
