import React from 'react'

import Layout from '../src/Layout'
import Portrait from '../src/Portrait'
import Cover from '../src/Cover'

import team from '../src/data/team'

export default ({url}) => {
  const meta = {
    title: 'Project R-Crew',
    description: 'Die Project R-Aufbau-Crew arbeitet derzeit – gemeinsam mit zahlreichen Komplizinnen im Hintergrund – an der Gesellschaftsform, dem Aufbau der Crowdfunding-Plattform, der IT-Entwicklung und dem Redaktionskonzept.',
    image: 'https://assets.project-r.construction/images/project_r_crew2.jpg',
    url: 'https://project-r.construction/crew'
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017'}}
      >
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <p>Zur Aufbau-Crew gehören:</p>

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}
    </Layout>
  )
}
