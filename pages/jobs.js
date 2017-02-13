import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Link from 'next/link'
import {RawPortrait} from '../src/Portrait'

import team from '../src/data/team'

const clara = team.filter(p => p.name === 'Clara Vuillemin')[0]

export default () => {
  const meta = {
    title: 'Project R sucht zwei Entwickler/innen',
    description: 'Project R ist eine Rebellion gegen die traditionellen Verlage: Es will die Medienwelt entscheidend verändern.',
    image: 'https://assets.project-r.construction/images/wewantyou.jpg',
    url: 'https://project-r.construction/jobs'
  }

  return (
    <Layout meta={meta} cover={(
      <Cover image={{
        credit: 'Foto: Jan Bolomey für Project R',
        src: 'https://assets.project-r.construction/images/wewantyou.jpg',
        alt: 'Das Project R Team auf dem Balkon des Hotel Rothaus'}}
      >
        <h1>Jobs</h1>
        <p>Wir suchen zwei Entwickler/innen.</p>
      </Cover>
    )}>
      <p>Project R ist eine Rebellion gegen die traditionellen Verlage: Es will die Medienwelt entscheidend verändern. Eine entschlossene Crew entwickelt ein digitales Magazin für den Journalismus des 21. Jahrhunderts. In allen Bereichen sind Spezialistinnen am Werk: bei der Publizistik, der Geschäftsentwicklung, der Zusammenarbeit, dem Community Building und der IT. Wir arbeiten kollaborativ und ohne steile Hierarchien. Arbeitsort ist das Hotel Rothaus an der Zürcher Langstrasse. Mehr zum Projekt: <Link href='/'><a>project-r.construction</a></Link></p>

      <p>Gleichberechtigung und Diversität sind für uns eine Herzenssache. Wir streben ein in allen Belangen gut durchmischte Teams an. Bereits heute profitiert ein sehr diverses Team in Wissen und Erfahrung voneinander.  Mit dem Aufbau der Redaktion werden wir Sommer 2017 starten – derzeit stellen wir noch keine Journalistinnen und Journalisten an.</p>

      <h2>Zur Verstärkung unserer IT-Crew suchen wir eine Backend-Entwickler/in und eine Frontend-Entwickler/in.</h2>

      <p>Du liebst guten Journalismus und hast Lust, Teil eines Entwicklungsprojekts zu sein. Du programmierst leidenschaftlich und findest es spannend ein komplexes Produkt von den Requirements über die technische Planung, die Implementierung, das Testing und den Betrieb mit einer schlagkräftigen Guerilla-Truppe mitzuentwickeln.</p>

      <p>Arbeitsbeginn: Juni 2017 | 60 – 100% | projektbasiert bis Januar 2018, Verlängerung nach Absprache.</p>

      <p><strong>Frontend</strong>: Du hast Erfahrung mit React, schreibst gut strukturierte Web-Apps und kannst ein Responsive-Design umsetzen.</p>

      <p><strong>Backend</strong>: Du bist Node.js-Profi, fühlst dich mit Datenbanken aller Art wohl und hast Erfahrung mit Docker.</p>

      <p>Wir sind ein kleines Team. Es ist wichtig, dass du Lust hast, an vielen Ecken und Enden anzupacken. Wir machen alles selber: von den Requirements bis zum Support. Von Vorteil wäre, wenn du mit einigen der von uns verwendeten Technologien Erfahrung hättest: Node.js, React und React Native, GraphQL, Next.js, SQL (idealerweise PostgreSQL), Docker, Kubernetis, Contenteditable-Editoren (e.g. Slate, Draft.js), D3.js.</p>

      <h3>Deine Vorteile bei uns (abgesehen von ewigem Ruhm):</h3>
      <ul>
        <li>Ein diverses und leidenschaftliches Team</li>
        <li>Du arbeitest nicht von der Welt abgekoppelt und bist du bei den Entscheidungen der Geschäftsleitung wie der Redaktion dabei</li>
        <li>Hoher Einheitslohn</li>
        <li>Der ganze Code wird unter einer Open-Source-Lizenz veröffentlicht</li>
        <li>24h Hotel Reception</li>
        <li>Club Mate soviel du willst immer gratis</li>
      </ul>

      <RawPortrait {...clara} age={null}>
        <p>Bewerbungen bitte an <a href={`mailto:${clara.email}`}>{clara.email}</a>.</p>
      <h2>Project R</h2>
      <p>c/o Hotel Rothaus<br />
      Sihlhallenstrasse 1<br />
      CH-8004 Zürich
      </p>
      <img style={{maxWidth: 50}} src='https://assets.project-r.construction/images/project_r_logo.svg' />
      </RawPortrait>


    </Layout>
  )
}
