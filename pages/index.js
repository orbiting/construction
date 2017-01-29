import React from 'react'
import {css} from 'glamor'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Portrait from '../src/Portrait'
import Link from 'next/link'

import team from '../src/data/team'

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
        src: 'https://assets.project-r.construction/images/project_r_crew.jpg',
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 201'}}
      >
        <h1>{meta.title}</h1>
        <p>«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam, oder gar nicht.»</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

      <blockquote>«Ich bin sicher, eine kleine Rebellion hier und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

      <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

      <p>Dafür haben wir uns fürs erste im legendären Hotel Rothaus einquartiert, mitten im Zürcher Kreis 4 an der Langstrasse, genauer: an der Sihlhallenstrasse 1. Das Rothaus war viele Jahre das Winterquartier für die Artisten des Zirkus Knie, später ein Stundenhotel – keine schlechte Umgebung für publizistische Pläne.</p>

      <img src="https://assets.project-r.construction/images/rothaus.jpg" />

      <p>Unser Job dort wird sein, eine Zukunft für den Journalismus abseits der grossen Verlage zu bauen. Denn die traditionellen Verlagshäuser verlassen die Publizistik. Sie investieren zwar noch Reden in ihr altes Geschäftsmodell, aber das Geld und die Ideen fliessen in den Aufbau von Internet-Handelshäusern. Das ist ökonomisch vernünftig, aber schlimm für die Demokratie. Denn mit schlechten Informationen fallen schlechte Entscheidungen.</p>

      <p>Unsere Aufgabe ist es, ein digitales Magazin für den Journalismus des 21. Jahrhunderts zu entwickeln: einen Salon für Debatten und ungelöste Fragen, smart, politisch, fair – und mitreissend genug, dass die Artikel freiwillig gelesen werden. Das wäre eigentlich Abenteuer genug. Zusätzlich haben wir aber auch die Aufgabe, ein Geschäftsmodell dafür zu entwickeln: ein Medium, das schlagkräftig genug ist, um im öffentlichen Diskurs einen Unterschied zu machen. Und schlank genug, um zu überleben.</p>

      <p>Seit Monaten arbeitet die Project R-Aufbau-Crew, gemeinsam mit zahlreichen Komplizinnen und Komplizen im Hintergrund, an der Gesellschaftsform, dem Aufbau der Crowdfunding-Plattform, der IT-Entwicklung und dem Redaktionskonzept.</p>

      <p>Zur Aufbau-Crew gehören:</p>

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i%2)} />)}

      <h3>Medienartikel zu Project R</h3>

      <ul>
        <li><a href="http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit">Interview: «Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a></li>
        <li><a href="http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger">Und ewig sparen die Verleger</a></li>
        <li><a href="http://presseverein.ch/2016/10/09/die-rebellion-beginnt/">Die Rebellion beginnt</a></li>
      </ul>

      <p>
        <a href="https://www.facebook.com/Project-R-1283717661652978">Facebook</a> –
        <a href="https://twitter.com/_Project_R">Twitter</a> –
        <Link href="/media"><a>Medieninformationen</a></Link>
      </p>

      <p>Wenn Sie informiert bleiben wollen, bitte hier Ihre E-Mail-Adresse eintragen:</p>
      <Newsletter />

      <p>Danke!</p>

      <h2>Project R</h2>
      <p>c/o Hotel Rothaus<br/>
      Sihlhallenstrasse 1<br/>
      CH-8004 Zürich
      </p>
      <img style={{maxWidth: 50}} src="https://assets.project-r.construction/images/project_r_logo.svg" />

      <p>Spendenkonto:<br/>
      Verein für unabhängigen Journalismus<br/>
      Hegifeldstrasse 57<br/>
      8404 Winterthur<br/>
      Raiffeisenbank Winterthur<br/>
      IBAN: CH12 8148 5000 0082 2840 1
      </p>
    </Layout>
  )
}