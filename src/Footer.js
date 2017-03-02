import React from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia'

const Footer = () => (
  <div>
    <Link href='/'><a>
      <img
        style={{maxWidth: 50, marginBottom: 10, marginTop: 20}}
        src='https://assets.project-r.construction/images/project_r_logo.svg' />
    </a></Link>

    <p>
      <Link href='/team'><a>Team</a></Link>{' – '}
      <Link href='/media'><a>Medieninformationen</a></Link>{' – '}
      <Link href='/jobs'><a>Jobs</a></Link>
    </p>

    <SocialMedia />

    <p>
    Project R<br />
    c/o Hotel Rothaus<br />
    Sihlhallenstrasse 1<br />
    CH-8004 Zürich
    </p>

    <p>Spendenkonto:<br />
    Verein für unabhängigen Journalismus<br />
    Hegifeldstrasse 57<br />
    8404 Winterthur<br />
    Raiffeisenbank Winterthur<br />
    IBAN: CH12 8148 5000 0082 2840 1
    </p>
  </div>
)

export default Footer
