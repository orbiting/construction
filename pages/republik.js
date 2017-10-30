import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Card from '../src/Card'

export default ({url}) => {
  const meta = {
    title: 'Project R geht an den Start',
    description: '«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam – oder gar nicht.»',
    image: 'http://localhost:8000/images/optimized/balkon.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url}>

      <h2>Das erste Projekt: Die «Republik»</h2>

    </Layout>
  )
}
