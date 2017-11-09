import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

import FacebookIcon from '../src/icons/facebook'
import TwitterIcon from '../src/icons/twitter'

export default ({url}) => {
  const meta = {
    title: 'Manifest',
    description: '«Lat. manifestus = sichtbar gemacht, handgreiflich gemacht»',
    image: 'http://localhost:8000/images/optimized/header_manifest.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'http://localhost:8000/images/optimized/header_aktuelles.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
        >
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <p>Unser Manifest bringt auf den Punkt, wofür wir stehen. Es entstand im Winter 2016/2017 im Gründerteam von Project R und der «Republik». Am 12. April 2017 haben wir es in Bern präsentiert. Es hängt heute aussen am Hotel Rothaus, dem Sitz von Project R und der «Republik» an der Langstrasse in Zürich.</p>

      <p>
        <a href='https://assets.republik.ch/cf_gui/static/manifest.pdf' target='_blank'>Manifest als PDF herunterladen</a>
      </p>
      <p>
        Wollen Sie uns unterstützen, indem Sie das Manifest öffentlich aufhängen? Das würde uns freuen! Holen Sie Ihr kostenloses DIN-A3-Poster-Manifest hier bei uns im Hotel Rothaus ab. Bitte kurz vorher Bescheid sagen: <a style={{whiteSpace: 'nowrap'}} href='mailto:kontakt@project-r.construction'>kontakt@project-r.construction</a></p>

    </Layout>
  )
}
