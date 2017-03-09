import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const newsletters = [
  {
    href: '/newsletter/2017-01-10-hotel-rothaus',
    title: 'Project R geht an den Start',
    date: '10. Januar 2017',
    image: {
      src: 'https://assets.project-r.construction/images/project_r_crew.jpg',
      alt: ''
    }
  }
]

export default ({url}) => {
  const meta = {
    title: 'Project R',
    description: 'ToDo',
    image: 'https://assets.project-r.construction/images/balkon.jpg',
    url: 'https://project-r.construction/'
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/rothaus.jpg',
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017'}}
      >
        <h1>{meta.title}</h1>
        <p>«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam, oder gar nicht.»</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

      <blockquote>«Ich bin sicher, eine kleine Rebellion hie und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

      <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>
      <p>Wenn Sie informiert bleiben wollen, bitte hier für den Newsletter eintragen:</p>
      <Newsletter />

      <p>Danke!</p>

      <h3>Aktuelles von Project R</h3>

      <Grid>
        {newsletters.map((newsletter, i) => (
          <GridItem key={i}>
            <Card {...newsletter} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}
