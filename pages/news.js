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
    description: '«Stand der Arbeit, Stand des Irrtums beim Aufbau von Project R und der ‹Republik›.»',
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

      <h2>Veranstaltungen</h2>

      <h3>«Die Welt verändern – indem man sie beschreibt»</h3>

      <p> Kosmopolitics, 13. November 2017, 20.00 Uhr<br />
        Kosmos, Lagerstrasse 102, 8004 Zürich</p>

      <p>Wenn die Grenzen zwischen Aktivismus und Journalismus fallen: Welche neuen Formen von Berichterstattung entstehen, welche sind Erfolg versprechend? Wir geben Einblick in erfolgreiche Modelle und diskutieren Erfahrungen, Probleme, Chancen und die Zukunft von aktivistischem Journalismus.</p>

      <p>Moderation: Hannes Britschgi, Publizist Ringier</p>

      <h3>«Republik: Stand der Arbeit, Stand des Irrtums»</h3>
      <p>Kosmopolitics, 4. Dezember 2017, 20.00 Uhr <br />
        Kosmos, Lagerstrasse 102, 8004 Zürich</p>

      <p>Die Redaktion der «Republik» gibt Einblick in den Redaktionsaufbau, die aktuellen Themen und Pläne für den Start im Januar 2018. Und stellt sich den Fragen, Ideen und Warnungen des Publikums.</p>

      <h2>Vergangene Veranstaltungen</h2>

      <h3>«Werd erwachsen: Jammer nicht. Tu was!»</h3>
      <p>Kosmopolitics, 9. Oktober 2017, 20.00 Uhr<br />
        Kosmos, Lagerstrasse 102, 8004 Zürich</p>
      <p>
        <img src='https://assets.project-r.construction/images/Kosmopolitics-20171009_20-10_7739.jpg' />
      </p>
      <p>Welchen Beitrag kann ich leisten, an die Gesellschaft, an die Institutionen, an die Demokratie? Menschen, die zum Schluss gekommen sind, dass nach der Systemkritik eine Zeit des Bauens folgt, erzählen ihre Geschichte und laden das Publikum ein, über ihren (zukünftigen) Beitrag an die Gesellschaft nachzudenken.</p>
      <p>Gäste:</p>
      <ul>
        <li>Constantin Seibt, «Republik»</li>
        <li>Flavia Kleiner, Operation Libero</li>
        <li>Carlos Hanimann, WOZ</li>
        <li>Mirjam Walser, Unternehmerin, SINGA Switzerland und RAT – Radical Thinkers</li>
      </ul>
      <p>Moderation: Christine Loriol – denken, schreiben, reden</p>

      <h3>«Gesünder durch Informationsdiät!»</h3>
      <p>Kosmopolitics, 18. September 2017, 20.00 Uhr<br />
        Kosmos, Lagerstrasse 102, 8004 Zürich</p>
      <p>
        <img src='https://assets.project-r.construction/images/20170918_20-36_1694_full.jpg' />
      </p>

      <p>Welche Nachrichten wünsche ich mir: täglich, jährlich, einmal im Leben? In diesem interaktiven Workshop mit vorangehendem Gespräch beleuchten wir die Frage, was an Information unverzichtbar ist – und was ungeniessbar.</p>

      <p>Gäste:</p>
      <ul>
        <li>Elizabeth Bernold, Verhaltensökonomin</li>
        <li>Richard Buser, Architekturhistoriker und News-Flexitarier</li>
        <li>Andreas Dietrich, Chefredaktor «Blick»</li>
        <li>Adrienne Fichter, Redaktorin «Republik», Autorin «Smartphone-Demokratie»</li>
        <li>Sarah Genner, Medienpsychologin und Dozentin ZHAW</li>
        <li>Oswald Sigg, ehemaliger Bundesratssprecher, Publizist</li>
      </ul>

      <p>Moderation: Olivia Kühni, stv. Chefredaktorin «Schweizer Monat»</p>

    </Layout>
  )
}

export default compose(
  withData,
  graphql(getDocuments)
)(News)
