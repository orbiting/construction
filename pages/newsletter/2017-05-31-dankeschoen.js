import React from 'react'
import {css} from 'glamor'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'
import Newsletter from '../../src/Newsletter'

const topBreak = 700
const topPromoStyle = css({
  padding: '0 0 20px 20px',
  maxWidth: 280,
  fontSize: 14,
  float: 'right',
  [`@media (max-width: ${topBreak}px)`]: {
    display: 'none'
  },
  '@media (min-width: 800px)': {
    marginRight: -80
  }
})

export default ({url}) => {
  const meta = {
    title: 'Ein starkes Signal für den Journalismus',
    description: 'Eine Republik wird nie von wenigen Leuten gegründet, sondern immer nur von vielen. Und das haben Sie in den letzten fünf Wochen tatsächlich gemeinsam mit uns getan: eine Republik gegründet.',
    image: 'https://assets.project-r.construction/images/testimonials_collage.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Eine Collage der Verlegerinnen'
      }}>
        <h1>Dankeschön</h1>
        <p>Stay hungry. Stay foolish.</p>
      </Cover>
    )}>


    </Layout>
  )
}
