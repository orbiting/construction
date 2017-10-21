import React, {PropTypes} from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import {intersperse} from './utils/helpers'

const links = [
  {
    path: '/news',
    title: 'Aktuelles'
  },
  {
    path: '/republik',
    title: 'Republik'
  },
  {
    path: '/crew',
    title: 'Crew'
  },
  {
    path: '/jobs',
    title: 'Jobs'
  },
  {
    path: '/manifest',
    title: 'Manifest'
  },
  {
    path: '/english',
    title: 'English'
  },
  {
    path: '/media',
    title: 'Medieninformationen'
  }
]

const Footer = ({url}) => (
  <div>
    <Link href='/'><a>
      <img
        style={{maxWidth: 50, marginBottom: 10, marginTop: 20}}
        src='https://assets.project-r.construction/images/project_r_logo.svg' />
    </a></Link>

    <p>
      {intersperse(
        links.map(({path, title}, i) => {
          if (path === url.pathname) {
            return title
          }
          return (
            <Link key={i} href={path}>
              <a>
                {title}
              </a>
            </Link>
          )
        }),
        ' – '
      )}
    </p>

    <SocialMedia />

    <p>
    Project R<br />
    c/o Hotel Rothaus<br />
    Sihlhallenstrasse 1<br />
    8004 Zürich<br />
    Schweiz
    </p>

    <p>
      Spendenkonto:<br />
      <strong>Project R Genossenschaft</strong><br />
      Sihlhallenstrasse 1<br />
      8004 Zürich<br />
      Raiffeisenbank Winterthur<br />
      IBAN: CH04 8148 5000 0083 4669 1
    </p>
  </div>
)

Footer.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Footer
