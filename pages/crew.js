import React from 'react'

import Layout from '../src/Layout'
import Portrait from '../src/Portrait'
import Cover from '../src/Cover'

import team from '../src/data/team'

export default ({url}) => {
  const meta = {
    title: 'Project-R-Crew',
    description: 'Project R wurde von einer engagierten Community und zahlreichen Helferinnen ins Leben gerufen. Inzwischen hat die Genossenschaft mehr als 14\'000 Mitglieder.',
    image: 'https://assets.project-r.construction/images/header_crew.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Project-R-Crew in der Lobby des Hotel Rothaus am 5. Januar 2017'}}
      >
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>
      <p>Die Project R Genossenschaft arbeitet derzeit primär an der Entwicklung des digitalen Magazins «Republik». Dabei ergänzen sich die beiden Unternehmen perfekt: Bei der gemeinnützigen Project R Genossenschaft ist primär das Institutionelle angesiedelt, in der Republik AG das Publizistische. Das Team der «Republik» finden Sie <a href='https://www.republik.ch/crew'>hier</a>. Und das ist die Crew, die bei Project R den Rahmen für von Bürgerinnen und Bürgern finanzierten Journalismus schafft:</p>

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}
    </Layout>
  )
}
