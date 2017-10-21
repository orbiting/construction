import React from 'react'
import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Card from '../src/Card'

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

    <p>Project R ist die gemeinnützige Genossenschaft hinter der «Republik». Project R fördert die Demokratie, indem sie den Journalismus als vierte Gewalt stärkt.</p>

    <p>Die Genossenschaft setzt sich ein für die Weiterentwicklung des Journalismus und die Vermittlung relevanter Informationen, die Bürgerinnen und Bürgern eine kritische Wissens- und Meinungsbildung ermöglichen.</p>

    <p>Dem Gemeinwohl verpflichtet, fördert Project R den konstruktiven gesellschaftlichen Diskurs und diskriminierungsfreie, vielfältige Debatten über die Fragen unserer Zeit.</p>

    <p>Laden Sie <a href="https://assets.republik.ch/cf_gui/static/statuten_project_r_genossenschaft_unterschrieben.pdf" download>hier</a> die Statuten der Project R Genossenschaft herunter.</p>

    <p>Und hier können Sie Mitglied werden: <a href="https://www.republik.ch/pledge">www.republik.ch</a>.</p>

    <p>Wenn Sie informiert bleiben wollen, bitte hier für den Newsletter eintragen:</p>
    <Newsletter />
    <p>Danke!</p>

    <h3>Die «Republik»: Das erste Projekt von Project R</h3>

    <p>Vom 26. April bis zum 31. Mai lief die Crowdfunding-Kampagne für das digitale Magazin «Republik». Sie traf einen Nerv: Fast 14’000 begeisterte Unterstützerinnen und Unterstützer der ersten Stunde wollen mit uns gemeinsam einen Unterschied machen und das Mediensystem verändern. Die «Republik» geht im Januar 2018 an den Start – kompromisslos in der Qualität, leserfinanziert, ohne Werbung und ohne Bullshit.</p>

    <p>Hier finden Sie die «Republik»: <a href='https://www.republik.ch'>www.republik.ch</a>. Die Webseite des erfolgreichen Crowdfundings finden Sie <a href='https://www.republik.ch/crowdfunding'>hier</a>.</p>

  </Layout>
  )
}
