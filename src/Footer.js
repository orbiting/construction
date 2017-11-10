import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import Menu from './Menu'

const Footer = ({url}) => (
  <div>
    <Link href='/'><a>
      <img
        style={{maxWidth: 50, marginBottom: 10, marginTop: 20}}
        src='https://assets.project-r.construction/images/project_r_logo.svg' />
    </a></Link>

    <Menu url={url} />

    <SocialMedia />

    <p>
      <strong>Kontakt</strong><br />
      Project R Genossenschaft<br />
      Sihlhallenstrasse 1<br />
      8004 Zürich<br />
      <a href='mailto:kontakt@project-r.construction'>kontakt@project-r.construction</a><br />
    </p>

    <p>
      <strong>Rechtliches</strong><br />
      <a href='https://assets.project-r.construction/media/statuten_project_r_genossenschaft_unterschrieben.pdf'>
        Statuten
      </a>
    </p>

    <p>
      <strong>Spendenkonto</strong><br />
      Project R Genossenschaft<br />
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
