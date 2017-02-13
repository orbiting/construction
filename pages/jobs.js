import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../src/Layout'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Jobs</title>
      </Head>
      <h1>Jobs</h1>

      <p>«Project R» ist eine Revolte gegen die traditionellen Verlage: Es will die Medienwelt verändern. Eine entschlossene Crew entwickelt ein digitales Magazin für den Journalismus des 21. Jahrhunderts. In allen Bereichen sind Spezialistinnen am Werk: bei der Publizistik, der Geschäftsentwicklung, der Zusammenarbeit, dem Community Building und der IT. Wir arbeiten kollaborativ und ohne steile Hierarchien. Arbeitsort ist das Hotel Rothaus an der Zürcher Langstrasse.</p>

      <p>Gleichberechtigung und Diversität ist für uns eine Herzenssache. Wir streben ein in allen Belangen gut durchmischtes Team an. Bereits heute profitiert ein sehr diverses Team in Wissen und Erfahrung voneinander.  Mit dem Aufbau der Redaktion werden wir Sommer 2017 starten – zurzeit stellen wir noch keine Journalist*innen an.</p>

      <h3>Zur Verstärkung unserer IT-Crew suchen wir eine Backend-Entwickler*in und eine Frontend-Entwickler*in.</h3>

      <p>Du liebst guten Journalismus und hast Lust, Teil einer Weiterentwicklung der Medienlandschaft zu sein. Du programmierst leidenschaftlich und findest es spannend ein komplexes Produkt von den Requirements über die technische Planung, die Implementierung, das Testing und den Betrieb mit einer schlagkräftigen Guerilla-Truppe mitzuentwickeln.</p>

      <p>Ungefähr ab Juni 2017 | 60 – 100% | projektbasiert bis Jan 2018, Verlängerung nach Absprache</p>

      <p><b>Frontend</b>: Du hast Erfahrung mit React, schreibst gut strukturierte Web-Apps und kannst ein Responsive-Design umsetzen.</p>
      
      <p><b>Backend</b>: Du bist Node.js Profi, fühlst dich mit Datenbanken aller Art wohl und hast Erfahrung mit Docker.</p>

      <p>Wir sind ein kleines Team. Es ist wichtig, dass du Lust hast, an vielen Ecken und Enden anzupacken. Wir machen alles selber; von den Requirements bis zum Support. Es wäre von Vorteil, wenn du mit einigen der von uns verwendeten Technologien Erfahrung hättest: Node.js, React und React Native, GraphQL, Next.js, SQL (idealerweise PostgreSQL), Docker, Kubernetis, Contenteditable-Editoren (e.g. Slate, Draft.js), D3.js.</p>

      <p>Deine Vorteile bei uns (abgesehen von ewigem Ruhm):</p>
      <ul>
        <li>Ein total diverses und leidenschaftliches Team</li>
        <li>Du arbeitest nicht von der Welt abgekoppelt und bist du bei den Entscheidungen der Geschäftsleitung wie der Redaktion dabei.</li>
        <li>Hoher Einheitslohn</li>
        <li>24h Hotel Reception und viele Duschen</li>
        <li>Club Mate soviel du willst immer gratis</li>
      </ul>

      <p>Bewerbungen bitte an <a href='mailto:clara.vuillemin@project-r.construction'>clara.vuillemin@project-r.construction</a></p>

    </Layout>
  )
}
