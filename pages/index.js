<<<<<<< HEAD
import React from 'react'
import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Project R',
    description: '«Es ist Zeit, dass sich die Journalisten unabhängig machen. Damit der Journalismus unabhängig von den Grossverlagen existieren kann. Ein Modell dafür schafft man nur gemeinsam – oder gar nicht.»',
    image: 'http://localhost:8000/images/optimized/header_front.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'http://localhost:8000/images/optimized/rothaus_r.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
      >
        <h1>Project R</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <p>Project R ist die gemeinnützige Genossenschaft hinter der «Republik». Project R fördert die Demokratie, indem sie den Journalismus als vierte Gewalt stärkt.</p>

      <p>Die Genossenschaft setzt sich ein für die Weiterentwicklung des Journalismus und die Vermittlung relevanter Informationen, die Bürgerinnen und Bürgern eine kritische Wissens- und Meinungsbildung ermöglichen.</p>

      <p>Dem Gemeinwohl verpflichtet, fördert Project R den konstruktiven gesellschaftlichen Diskurs und diskriminierungsfreie, vielfältige Debatten über die Fragen unserer Zeit.</p>

      <p>
        Lesen Sie <a href='https://assets.republik.ch/cf_gui/static/statuten_project_r_genossenschaft_unterschrieben.pdf' download>hier</a> die Statuten der Project R Genossenschaft. Und werden Sie <a href='https://www.republik.ch/pledge'>hier</a> Mitglied. <br />
      </p>
=======
import React, { Component } from 'react'

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
      title: 'Project R geht an den Start',
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
          <h1>Project R</h1>
          <p>{meta.description}</p>
        </Cover>
      )}>

        <p>Ladies and Gentlemen,</p>

        <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

        <blockquote>«Ich bin sicher, eine kleine Rebellion hie und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

        <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

        <p>Vom 26. April bis 31. Mai lief die Crowdfunding-Kampagne für das digitale Magazin «Republik» von Project R. Ein überwältigender Erfolg: Über 13'000 Unterstützerinnen und Unterstützer wollen gemeinsam mit der Aufbau-Crew von Project R im Mediensystem einen entscheidenden Unterschied schaffen. Die «Republik» geht 2018 an den Start – kompromisslos in der Qualität, leserfinanziert, ohne Werbung und ohne Bullshit.</p>
>>>>>>> master

        <p>Hier finden Sie die «Republik» <a href='https://www.republik.ch'>www.republik.ch</a>. Die Webseite des erfolgreichen Crowdfundings finden Sie <a href='https://www.republik.ch/crowdfunding'>hier</a>.</p>

<<<<<<< HEAD
      <h3>Die «Republik»: Das erste Projekt von Project R</h3>

      <p>Vom 26. April bis zum 31. Mai lief die Crowdfunding-Kampagne für das digitale Magazin «Republik». Sie traf einen Nerv: Fast 14\'000 begeisterte Unterstützerinnen und Unterstützer der ersten Stunde wollen mit uns gemeinsam einen Unterschied machen und das Mediensystem verändern. Die «Republik» geht im Januar 2018 an den Start – kompromisslos in der Qualität, leserfinanziert, ohne Werbung und ohne Bullshit.</p>

      <p>Hier finden Sie die «Republik»: <a href='https://www.republik.ch'>www.republik.ch</a>. Die Webseite des erfolgreichen Crowdfundings finden Sie <a href='https://www.republik.ch/crowdfunding'>hier</a>.</p>

    </Layout>
  )
=======
        <p>Wenn Sie informiert bleiben wollen, bitte hier für den Newsletter eintragen:</p>
        <Newsletter />

        <p>Danke!</p>

        <h3>Aktuelles von Project R</h3>

        {!!loading && <p>Lädt…</p>}
        {!!error && <p>Nicht verfügbar, bitte versuchen Sie es später nochmals.</p>}
        <Grid>
          {newsletters.map((newsletter, i) => (
            <GridItem key={i}>
              <Card {...newsletter.meta} />
            </GridItem>
          ))}
        </Grid>
      </Layout>
    )
  }
>>>>>>> master
}

export default compose(
  withData,
  graphql(getDocuments)
)(Index)
