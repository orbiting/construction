import React, {PropTypes} from 'react'
import Head from 'next/head'
import {css} from 'glamor'
import Footer from './Footer'

import 'glamor/reset'

css.global('html', {boxSizing: 'border-box'})
css.global('*, *:before, *:after', {boxSizing: 'inherit'})

css.global('body', {
  fontFamily: 'serif',
  fontSize: 18,
  color: '#444',
  WebkitFontSmoothing: 'antialiased'
})
css.global('.base h1, .base h2, .base h3', {
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  lineHeight: '1.2em',
  margin: '0 0 0.2em'
})
css.global('.base h1', {
  fontSize: 36
})
css.global('.base h2', {
  fontSize: 28
})
css.global('.base h3', {
  fontSize: 18
})
css.global('.base p', {
  margin: '0 0 0.8em'
})
css.global('.base img', {
  maxWidth: '100%'
})
css.global('a, a:visited', {
  color: '#222',
  textDecoration: 'underline'
})
css.global('a:hover', {
  color: '#444'
})
css.global('.base ul', {
  listStyleType: 'disc',
  margin: '0 0 1em',
  paddingLeft: 30
})

export const PADDING = 20
const containerStyle = css({
  margin: '0 auto',
  padding: PADDING,
  paddingTop: PADDING / 2,
  maxWidth: 640,
  '@media (min-width: 600px)': {
    paddingTop: PADDING
  }
})

const Layout = ({children, meta, cover, url}) => (
  <div className='base'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='shortcut icon' href='https://assets.project-r.construction/images/favicon.ico' />
      <meta name='author' content='Project R' />
    </Head>

    {!!meta && <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={meta.url} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' content={meta.image} />
      <meta property='fb:app_id' content='1774637906137716' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@_Project_R' />
      <meta name='twitter:creator' content='@_Project_R' />
    </Head>}

    {cover}

    <div {...containerStyle}>
      {children}

      <Footer url={url} />
    </div>
  </div>
)

Layout.propTypes = {
  cover: PropTypes.node,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default Layout