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
    title: 'Dankeschön',
    description: 'XXXXXXXXXXXXXX',
    image: 'https://assets.project-r.construction/images/XXXXXXXXXXXXXXX.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'XXXXXXXXXXXXXXXXXXXXX'
      }}>
        <h1>Dankeschön</h1>
        <p>Stay hungry. Stay foolish.</p>
      </Cover>
    )}>


    </Layout>
  )
}
