import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Offene Stellen',
    description: 'Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.',
    image: 'https://cdn.republik.space/s3/republik-assets/assets/images/jobs.jpg?resize=2000x',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Weitwinkelfoto von vielen Republik-Mitarbeitern und Freunden mit brennender Geburtstagstorte in der Mitte.'}}
      >
        <h1>Jobs</h1>
        <p>Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.</p>
      </Cover>
    )}>
      <p>Derzeit keinen offenen Stellen</p>
    </Layout>
  )
}

