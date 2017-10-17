import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Project R sucht Community Developer',
    description: 'Löse mit einem motivierten, multidisziplinären und unorthodoxen Team die interessantesten Probleme der Branche!',
    image: 'https://assets.project-r.construction/images/wewantyou.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Team von Project R und Republik auf dem Balkon des Hotel Rothaus'}}
      >
        <h1>Jobs</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <h2>Community Developer (60-80%)</h2>
      <p>ab November/Dezember 2017 oder nach Absprache</p>

      <p>Wir möchten unsere Verlegerinnen und Verleger begeistern. Stolz machen. Mit ihnen gemeinsam magische Momente kreieren. Wenn andere Medien ihren Erfolg anhand von Klickzahlen messen, messen wir ihn am Glanz in den Augen unserer Verlegerinnen. Wir wollen intensiv mit unserer Community debattieren, online wie offline. Wir wollen, dass unsere Texte wirken. Wir wollen unsere Themen hineintragen in die Gesellschaft. Wir wollen dazu beitragen, die Zukunft des digitalen Journalismus zu entwickeln. Dafür brauchen wir deine Unterstützung.</p>

      <h3>Das erwarten wir von dir:</h3>
      <p>Du magst Menschen. Du bist empathisch. Du findest den richtigen Ton, ganz gleich, wer dir gegenübersteht. Du bist gern Gastgeber und geniesst es, dich mit ganz unterschiedlichen Menschen zu umgeben.</p>

      <p>Du kennst dich aus mit Medien. Vielleicht hast du sogar schon einmal als Journalistin gearbeitet. Du kannst flott formulieren. Du weisst, wie soziale Medien ticken. Vielleicht hast du schon Erfahrungen im Community Management gesammelt. Du weisst, was los ist in der Welt und bildest dir dein eigenes Urteil.</p>

      <p>Vor allem aber bist du ein Organisationsgenie. Du hast einen Riecher dafür, welches Thema nach welcher Umsetzung verlangt. Du hast Erfahrung darin, Events zu organisieren. Wenn es drauf ankommt, kann man auf dich zählen. Wenn alles schief geht, behältst du die Nerven. Und findest eine Lösung.</p>

      <h3>Das bieten wir dir:</h3>
      <p>Eine Reise in eine unbekannte Zukunft. Die interessantesten Probleme der Branche. Ein motiviertes, multidisziplinäres und unorthodoxes Team. Viel Raum, um deine Ideen zu entfalten. Einen guten Einheitslohn. Ein Büro an einer der verruchtesten Ecken in Zürich.</p>

      <h3>Zu deinen Aufgaben gehören:</h3>
      <ul>
        <li>Interaktion mit Verleger*innen und anderen Communities auf verschiedenen Kanälen</li>
        <li>Repräsentation & Gastgeberei im Namen von Project R und Republik</li>
        <li>Schnittstelle Redaktion – Community in beide Richtungen</li>
        <li>Vertreten der Community-Perspektive in Redaktionssitzungen</li>
        <li>Zusammenarbeit mit verschiedenen Personen für publizistische Community-Projekte</li>
        <li>Beratung und Unterstützung von Mitarbeitenden (inkl. Redaktionsmitgliedern) in Bezug auf Interaktion mit Verleger*innen und anderen Communities</li>
        <li>Mithilfe beim Aufbau des Genossenschaftsrats und der demokratischen Organe der Project R Genossenschaft</li>
        <li>Planung, Vorbereitung und Durchführung von Veranstaltungen aller Art</li>
        <li>Rekrutierung und Briefing von spannenden Personen für Podien, Referate, Kurse, Workshops, etc.</li>
        <li>Bewerben von Veranstaltungen, z.B. auf Social Media oder über Newsletter</li>
        <li>Verfassen von Texten und Inhalten mit Community-Fokus für Social Media und eigene Kanäle, insbesondere Newsletter</li>
        <li>Datenbankpflege</li>
      </ul>

      <p>Bitte schicke deine Bewerbungsunterlagen inklusive Motivationsschreiben - möglichst kurz - bis zum 21. Oktober 2017 an <a href='mailto:communityrelations@project-r.construction'>communityrelations@project-r.construction</a></p>

      <h2>Ausbildungsplätze bei der «Republik»</h2>

      <p>Schon hat es sich herumgesprochen. Dass wir 2018 vier Trainees für unternehmerischen Journalismus einstellen. Junge Kolleginnen und Kollegen, die zweierlei mitbringen: schreiberischen Ehrgeiz und unternehmerisches Feuer. Die schon viel können und noch viel mehr vorhaben. Denen wir beibringen, wie man brillante Texte schreibt und ein Medienunternehmen exzellent managt. Und auch wir möchten lernen, mit euch gemeinsam: Wie gestaltet man so eine Ausbildung? Begründet eine «Academy for Entrepreneurial Journalism». Denn dort wollen wir hin.</p>

      <p>Schon gehen hier im Hotel Rothaus die ersten Bewerbungen ein. Über die wir uns sehr freuen. Aber haltet lieber noch einige Tage lang still. Bis zum 1. November 2017. Dann veröffentlichen wir an dieser Stelle das detaillierte Ausbildungskonzept. Erklären euch, wie ihr euch bewerben könnt.</p>

      <p>Bewerbungsschluss ist dann der 23. November 2017. Dann beginnt die Rekrutierungsphase. Und noch vor Weihnachten werdet ihr wissen, ob ihr an Bord seid. Ob wir gemeinsam ablegen Richtung Republik.</p>

      <p>Die Ausbildung beginnt Anfang April 2018 und dauert ein Jahr.</p>
      <p>Wir freuen uns auf deine Bewerbung!</p>
    </Layout>
  )
}
