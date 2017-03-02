import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'

export default () => {
  const meta = {
    title: 'Project R geht an den Start',
    description: 'Das Medienprojekt stellt seine Aufbau-Crew vor – und zieht ins Hotel Rothaus in Zürich',
    image: 'https://assets.project-r.construction/images/balkon.jpg',
    url: 'https://project-r.construction/'
  }

  return (
    <Layout meta={meta} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/rothaus.jpg',
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017'}}
      >
        <h1>{meta.title}</h1>
        <p>«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam, oder gar nicht.»</p>
      </Cover>
    )}>

      <p>TODO: Ladies and Gentlemen,</p>

      <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

      <blockquote>«Ich bin sicher, eine kleine Rebellion hie und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

      <p>Wenn Sie informiert bleiben wollen, bitte hier eintragen:</p>
      <Newsletter />

      <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

      <p>Dafür haben wir uns fürs erste im legendären Hotel Rothaus einquartiert, mitten im Zürcher Kreis 4 an der Langstrasse, genauer: an der Sihlhallenstrasse 1. Das Rothaus war viele Jahre das Winterquartier für die Artisten des Zirkus Knie, später ein Stundenhotel – keine schlechte Umgebung für publizistische Pläne.</p>

      <p>Danke!</p>
    </Layout>
  )
}
