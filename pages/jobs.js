import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Offene Stelle: Projektleitung Dialog & Social',
    description: 'Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.',
    image: 'https://assets.project-r.construction/images/header_jobs.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Fünf Mitarbeiter der «Republik» im Büro'}}
      >
        <h1>Jobs</h1>
        <p>Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.</p>
      </Cover>
    )}>

    <h3>Offene Stellen bei der Republik</h3>
    <ul>
      <li><a href='https://www.republik.ch/jobs#community'>Community Builder & Partnership Management</a></li>
      <li><a href='https://www.republik.ch/jobs#it'>Designerin</a></li>
      <li><a href='https://www.republik.ch/jobs#it'>React-Entwickler</a></li>
      <li><a href='https://www.republik.ch/jobs#it'>Backend-Entwicklerin</a></li>
    </ul>
  </Layout>
  )
}

