import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Jobs',
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

    <p>Zurzeit haben wir keine offenen Stellen.</p>

    </Layout>
  )
}
