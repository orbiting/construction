import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Portrait from '../src/Portrait'

import team from '../src/data/team'

export default () => {
  const meta = {
    title: 'Project R Team',
    description: 'todo',
    image: 'https://assets.project-r.construction/images/project_r_crew.jpg',
    url: 'https://project-r.construction/'
  }

  return (
    <Layout meta={meta} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/project_r_crew.jpg',
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017'}}
      >
        <h1>{meta.title}</h1>
        <p>«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam, oder gar nicht.»</p>
      </Cover>
    )}>
      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}
    </Layout>
  )
}
