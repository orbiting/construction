import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const newsletters = [
  {
    href: '/newsletter/2017-09-13-open-source',
    title: 'Der Crowdfunding-Code gegen die Frankenstein-Monster-Strategie',
    date: '13. September 2017',
    image: {
      src: 'https://assets.project-r.construction/images/nl7-code.jpg',
      alt: 'Backend-Code-Screenshot'
    }
  },
  {
    href: '/newsletter/2017-08-04-ausbau',
    title: 'Die Start-Aufstellung der «Republik»-Redaktion steht',
    date: '4. August 2017',
    image: {
      src: 'https://assets.project-r.construction/images/teamwork2.jpg',
      alt: 'Das Team der Republik bei einem Workshop'
    }
  },
  {
    href: '/newsletter/2017-05-31-signal-journalismus',
    title: 'Ein starkes Signal für den Journalismus',
    date: '31. Mai 2017',
    image: {
      src: 'https://assets.project-r.construction/images/testimonials_collage.jpg',
      alt: 'Eine Collage der Verlegerinnen'
    }
  },
  {
    href: '/newsletter/2017-04-26-start-crowdfunding',
    title: 'Startschuss Crowdfunding für «Republik»',
    date: '26. April 2017',
    image: {
      src: 'https://assets.project-r.construction/images/screen_crowdfunding_thumb.jpg',
      alt: 'iPhone Bildschirm mit Website Crowdfunding für Republik'
    }
  },
  {
    href: '/newsletter/2017-04-12-republik',
    title: 'So heisst das Magazin von Project R',
    date: '12. April 2017',
    image: {
      src: 'https://assets.project-r.construction/images/rothaus_republik.jpg',
      alt: 'Das Hotel Rothaus mit dem Banner der Republik'
    }
  },
  {
    href: '/newsletter/2017-03-15-aufbau',
    title: 'Der Bauplan von Project R',
    date: '15. März 2017',
    image: {
      src: 'https://assets.project-r.construction/images/enterprise_with_hand.jpg',
      alt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'
    }
  },
  {
    href: '/newsletter/2017-01-10-hotel-rothaus',
    title: 'Project R geht an den Start',
    date: '10. Januar 2017',
    image: {
      src: 'https://assets.project-r.construction/images/project_r_crew.jpg',
      alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017'
    }
  }
]

export default ({url}) => {
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

      <Grid>
        {newsletters.map((newsletter, i) => (
          <GridItem key={i}>
            <Card {...newsletter} />
          </GridItem>
        ))}
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
