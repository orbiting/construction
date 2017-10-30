import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Jobs',
    description: 'Löse mit einem motivierten, multidisziplinären und unorthodoxen Team die interessantesten Probleme der Branche!',
    image: 'http://localhost:8000/images/optimized/header_jobs.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Team von Project R und Republik auf dem Balkon des Hotel Rothaus'}}
      >
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <h2>Ausbildungsplätze bei der «Republik»</h2>
      <p>Schon hat es sich herumgesprochen. Dass wir 2018 vier Trainees für unternehmerischen Journalismus einstellen. Junge Kolleginnen und Kollegen, die zweierlei mitbringen: schreiberischen Ehrgeiz und unternehmerisches Feuer. Die schon viel können und noch viel mehr vorhaben. Denen wir beibringen, wie man brillante Texte schreibt und ein Medienunternehmen exzellent managt. Und auch wir möchten lernen, mit euch gemeinsam: Wie gestaltet man so eine Ausbildung? Begründet eine «Academy for Entrepreneurial Journalism». Denn dort wollen wir hin.</p>

      <p>Schon gehen hier im Hotel Rothaus die ersten Bewerbungen ein. Über die wir uns sehr freuen. Aber haltet lieber noch einige Tage lang still. Bis zum 1. November 2017. Dann veröffentlichen wir an dieser Stelle das detaillierte Ausbildungskonzept. Erklären euch, wie ihr euch bewerben könnt.</p>

      <p>Wir freuen uns auf deine Bewerbung!</p>
    </Layout>
  )
}
