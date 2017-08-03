import React from 'react'
import Head from 'next/head'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'
import Portrait from '../../src/Portrait'

// the newsletter content should never change
const team = [
  {
    image: 'https://assets.project-r.construction/images/adrienne_fiechter.jpg',
    name: 'Adrienne Fiechter',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/anja_conzett.jpg',
    name: 'Anja Conzett',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/ariel_hauptmeier.jpg',
    name: 'Ariel Hauptmeier',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/brigitte_meyer.jpg',
    name: 'Brigitte Meyer',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/carlos_hanimann.jpg',
    name: 'Carlos Hanimann',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/daniel_pfaender.jpg',
    name: 'Daniel Pfaender',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/lukas_buenger.jpg',
    name: 'Lukas Buenger',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/sylke_gruhnwald.jpg',
    name: 'Sylke Gruhnwald',
    age: 0,
    title: 'TK',
    description: ``,
    email: '@project-r.construction'
  }
]

export default ({url}) => {
  const meta = {
    title: 'Dürfen wir vorstellen? Die Neulinge an Bord der Republik',
    description: 'Journalistinnen, Journalisten und Programmierer: Das ist die Start-Aufstellung der Redaktion',
    image: 'https://assets.project-r.construction/images/teamwork1.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout url={url} meta={meta} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Auf dem Bild sieht man TK'
      }}
      >
        <h1>Die Start-Aufstellung der «Republik»-Redaktion steht</h1>
        <p>«Wir arbeiten in den nächsten Monaten daran, etwas Brauchbares, Nützliches, Schönes auf die Beine zu stellen. Natürlich werden wir nicht von Anfang an perfekt sein. Und auch später nie. Aber es ist unsere Aufgabe, Ihrem Vertrauen gerecht zu werden.»</p>
      </Cover>
    )}>

      <Head>
        <title>TK</title>
      </Head>
      <p>Ladies and Gentlemen,</p>

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}

      <p>Wir freuen uns auf ein gemeinsames 2018.</p>

      <p>Ihr Team der Republik und von Project R</p>
    </Layout>
  )
}
