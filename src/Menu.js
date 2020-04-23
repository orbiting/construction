import React from 'react'
import PropTypes from 'prop-types'
import { intersperse } from './utils/helpers'
import Link from 'next/link'

const links = [
  {
    path: '/news',
    title: 'Aktuelles'
  },
  {
    path: '/projects',
    title: 'Projekte'
  },
  {
    path: '/manifest',
    title: 'Manifest'
  },
  {
    path: '/jobs',
    title: 'Jobs'
  },
  {
    path: '/en',
    title: 'English'
  }
]

const Menu = ({ url }) => <p>
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

Menu.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Menu
