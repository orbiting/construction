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
      <a href='mailto:office@project-r.construction'>office@project-r.construction</a><br />
    </p>

    <p>
      <strong>Rechtliches</strong><br />
      <a href='https://cdn.repub.ch/s3/republik-assets/assets/statuten-statuen/statuten_project_r_genossenschaft_20201122.pdf'>
        Statuten
      </a>
    </p>

    <p>
      <strong>Vorstand</strong><br />
      <a href='https://www.republik.ch/~clara'>Clara&nbsp;Vuillemin</a> (Präsidentin), <a href='https://www.republik.ch/~sreinhard'>Sylvie&nbsp;Reinhard</a>, <a href='https://www.republik.ch/~pschmid'>Peter&nbsp;Schmid</a>, <a href='https://www.republik.ch/~cseibt'>Constantin&nbsp;Seibt</a>, <a href='https://www.republik.ch/~rmeier.guntert'>Regina&nbsp;Meier&nbsp;Güntert</a> und <a href='https://www.republik.ch/~avw'>Alfonso&nbsp;von&nbsp;Wunschheim</a>
    </p>

    <p>
      <a href='https://www.republik.ch/format/genossenschaftsrat'><strong>Genossenschaftsrat</strong></a>
    </p>

    <p>
      <strong>Spendenkonto</strong><br />
      Project R Genossenschaft<br />
      Sihlhallenstrasse 1<br />
      8004 Zürich<br />
      Raiffeisenbank Winterthur<br />
      IBAN: CH06 8080 8006 3318 5396 1
    </p>
  </div>
)

Footer.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Footer
