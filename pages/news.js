import React from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'redux'
import withData from '../lib/apollo/withData'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'
import staticNewsletters from '../src/data/newsletters'

const getDocuments = gql`
  query getDocuments {
    documents {
      meta {
        slug
        title
        description
        image
        publishDate
      }
    }
  }
`

const News = (props) => {
  const { data: {loading, error, documents}, url } = props

  let newsletters = loading || !documents
    ? []
    : documents.concat(staticNewsletters)

  const meta = {
    title: 'Aktuelles von Project R',
    description: 'Stand der Arbeit, Stand des Irrtums beim Aufbau von Project R und der «Republik».',
    image: 'https://assets.project-r.construction/images/header_aktuelles.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/header_aktuelles.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
        >
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <h2>Newsletter-Archiv</h2>

      {!!loading && <p>Lädt…</p>}
      {!!error && <p>Nicht verfügbar, bitte versuchen Sie es später nochmals.</p>}
      <Grid>
        {newsletters.map((newsletter, i) => (
          <GridItem key={i}>
            <Card {...newsletter.meta} />
          </GridItem>
          )
        )}
      </Grid>
    </Layout>
  )
}

export default compose(
  withData,
  graphql(getDocuments)
)(News)
