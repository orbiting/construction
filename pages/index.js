import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const newsletters = [
  {
    href: '/newsletter/2017-05-31-dankeschoen',
    title: 'Dankeschön',
    date: '31. Mai 2017',
    image: {
      src: 'https://assets.project-r.construction/images/XXXXXXXXXXXXXXXX.jpg',
      alt: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
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
    title: 'Project R geht an den Start',
    description: '«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam – oder gar nicht.»',
    image: 'https://assets.project-r.construction/images/balkon.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/rothaus_r.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
      >
        <h1>Project R</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

      <blockquote>«Ich bin sicher, eine kleine Rebellion hie und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

      <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

      <p>Vom 26. April bis 31. Mai lief die Crowdfunding-Kampagne für das digitale Magazin «Republik» von Project R. Ein überwältigender Erfolg: Über 13’000 Unterstützerinnen und Unterstützer wollen gemeinsam mit der Aufbau-Crew von Project R im Mediensystem einen entscheidenden Unterschied schaffen. Die «Republik» geht 2018 an den Start – kompromisslos in der Qualität, leserfinanziert, ohne Werbung und ohne Bullshit.</p>

      <p>Hier finden Sie die «Republik» <a href="https://www.republik.ch">www.republik.ch</a>. Die Webseite des erfolgreichen Crowdfundings finden Sie <a href="https://www.republik.ch/crowdfunding">hier</a>.</p>

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
