import React, { Component } from 'react'
import Link from 'next/link'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'redux'
import withData from '../lib/apollo/withData'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
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

class Index extends Component {
  render () {
    const { data: {loading, error, documents}, url } = this.props

    const meta = {
      title: 'Project R',
      description: '«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam – oder gar nicht.»',
      image: 'https://assets.project-r.construction/images/balkon.jpg',
      url: `https://project-r.construction${url.pathname}`
    }

    let newsletters = loading || !documents
      ? []
      : documents.concat(staticNewsletters)

    return (
      <Layout meta={meta} url={url} cover={(
        <Cover image={{
          src: 'https://assets.project-r.construction/images/rothaus_r.jpg',
          alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'
        }}>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
        </Cover>
      )}>

        <p>Project R ist die gemeinnützige Genossenschaft hinter der «Republik». Project R fördert die Demokratie, indem sie den Journalismus als vierte Gewalt stärkt.</p>

        <p>Die Genossenschaft setzt sich ein für die Weiterentwicklung des Journalismus und die Vermittlung relevanter Informationen, die Bürgerinnen und Bürgern eine kritische Wissens- und Meinungsbildung ermöglichen.</p>

        <p>Dem Gemeinwohl verpflichtet, fördert Project R den konstruktiven gesellschaftlichen Diskurs und diskriminierungsfreie, vielfältige Debatten über die Fragen unserer Zeit.</p>

        <p>Lesen Sie <a href='https://cdn.repub.ch/s3/republik-assets/assets/statuten-statuen/statuten_project_r_genossenschaft_20201122.pdf'>hier</a> die Statuten der Project R Genossenschaft.<br />
          <a href='https://www.republik.ch/pledge'>Mitglied werden</a></p>

        <h3>Die «Republik»: Das erste Projekt von Project R</h3>

        <p>Vom 26. April bis 31. Mai 2017 lief die Crowdfunding-Kampagne für das digitale Magazin «Republik» von Project R. Ein überwältigender Erfolg: Über 13'000 Unterstützerinnen und Unterstützer wollen gemeinsam mit der Aufbau-Crew von Project R im Mediensystem einen entscheidenden Unterschied schaffen. Die «Republik» ging am 14. Januar 2018 an den Start – kompromisslos in der Qualität, leserfinanziert, ohne Werbung und ohne Bullshit.</p>

        <p>Hier finden Sie die «Republik»: <a href='https://www.republik.ch'>www.republik.ch</a>.</p>

        <p>Wenn Sie informiert bleiben wollen, bitte hier für den Newsletter eintragen:</p>
        <Newsletter />

        <p>Danke!</p>

        <h3>Aktuelles von Project R</h3>

        {!!loading && <p>Lädt…</p>}
        {!!error && <p>Nicht verfügbar, bitte versuchen Sie es später nochmals.</p>}
        <Grid>
          {newsletters.slice(0, 2).map((newsletter, i) => (
            <GridItem key={i}>
              <Card {...newsletter.meta} />
            </GridItem>
          ))}
        </Grid>
        <Link href='/news'>
          <a>
            Zum Newsletter-Archiv
          </a>
        </Link>
      </Layout>
    )
  }
}

export default compose(
  withData,
  graphql(getDocuments)
)(Index)
