import React from 'react'

import Layout from '../src/Layout'
import Portrait from '../src/Portrait'

import team from '../src/data/team'

export default ({url}) => {
  const meta = {
    title: 'Project R-Crew',
    description: 'todo',
    image: 'https://assets.project-r.construction/images/project_r_crew.jpg',
    url: 'https://project-r.construction/'
  }

  return (
    <Layout meta={meta} url={url}>
      <h1>{meta.title}</h1>

      <p>Die Project R-Aufbau-Crew arbeitet derzeit – gemeinsam mit zahlreichen Komplizinnen im Hintergrund – an der Gesellschaftsform, dem Aufbau der Crowdfunding-Plattform, der IT-Entwicklung und dem Redaktionskonzept.</p>

      <p>Zur Aufbau-Crew gehören:</p> 

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}
    </Layout>
  )
}
