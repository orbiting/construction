import React, {PropTypes} from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import {intersperse} from './utils/helpers'

const links = [
  {
    path: '/crew',
    title: 'Crew'
  },
  {
    path: '/media',
    title: 'Medieninformationen'
  },
  {
    path: '/jobs',
    title: 'Jobs'
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
        links.map(({path, title}) => {
          if (path === url.pathname) {
            return title
          }
          return (
            <Link href={path}>
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

Footer.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Footer
