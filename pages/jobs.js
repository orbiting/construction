import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Offene Stelle: Projektleitung Dialog & Social',
    description: 'Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.',
    image: 'https://assets.project-r.construction/images/header_jobs.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Fünf Mitarbeiter der «Republik» im Büro'}}
      >
        <h1>Jobs</h1>
        <p>Löse mit einem motivierten, multidisziplinären Team die interessantesten Probleme der Branche.</p>
      </Cover>
    )}>

    <h2>Projektleitung Dialog & Social (60%) </h2>
    <p>Netzwerkredaktion & Community | ab April 2018 oder nach Absprache</p>


    <p>Wir möchten unsere Verlegerinnen und Verleger begeistern. Stolz machen. Mit ihnen gemeinsam magische Momente kreieren. Wenn andere Medien ihren Erfolg anhand von Klickzahlen messen, messen wir ihn am Glanz in den Augen unserer Verlegerinnen. Wir wollen intensiv mit unserer Community debattieren, online wie offline. Wir wollen unsere Themen hineintragen in die Gesellschaft. Unser Publikum für Journalismus begeistern. Und die Zukunft des digitalen Journalismus entwickeln. Dafür brauchen wir deine Unterstützung.</p>

    <p>Wir suchen einen Social-Media-Profi, der/die publizistisch denkt, die Redaktion mit neuen Ideen inspiriert und Social Storytelling zu einer eigenen journalistischen Disziplin entwickeln will. Du fühlst dich auf Twitter, Facebook und anderen sozialen Medien zu Hause, hast Lust, die Republik im Social Web zu repräsentieren, und möchtest den Dialog mit Verlegerinnen und Verlegern pflegen? Dann freuen wir uns auf deine Bewerbung.</p>

    <p>Zu deinen Aufgaben gehören:</p>
    <ul>
      <li>Planung und Umsetzung des Social-Media-Kalenders und von Redaktionsplänen</li>
      <li>Erstellen von Social-Media-Postings, in Zusammenarbeit mit Autorinnen und Produktion</li>
      <li>Monitoring der Social-Media-Resonanz der Republik-Geschichten</li>
      <li>Monitoring der Social-Media-Kanäle und der Republik-Debatten</li>
      <li>Beratung und Betreuung der Republik-Autorinnen zum Thema Social Media und Dialog</li>
      <li>Durchführung von Workshops und internen Weiterbildungen zum Thema</li>
      <li>Mitentwickeln der Rolle, ergänzende Felder mitgestalten (zum Beispiel Inhaltsmarketing, neue Plattformen etc.)</li>
      <li>Weiterentwickeln des Themas Social & Dialog bei der Republik und bei Project R</li>
      <li>Community Journalism und Storytelling-Projekte ins Leben rufen und vorantreiben</li>
      <li>Zusammenarbeit an der Schnittstelle von Redaktion, Community, Kommunikation</li>
      <li>Regelmässige Teilnahme an Redaktionssitzungen (etwa ein- bis zweimal pro Woche)</li>
    </ul>


    <p>Das bieten wir dir:</p>
    <p>Eine Reise in eine unbekannte Zukunft. Die interessantesten Probleme der Branche. Ein motiviertes, multidisziplinäres und unorthodoxes Team. Viel Raum, um deine Ideen zu entfalten. Einen guten Einheitslohn. Ein Büro an einer der verruchtesten Ecken in Zürich.</p>

    <p>Wir freuen uns auf deine Bewerbung inklusive Motivationsschreiben (bitte kurz) an <a href="mailto:dialog@republik.ch">dialog@republik.ch</a>.</p>

  </Layout>
  )
}

