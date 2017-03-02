import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'
import Cover from '../src/Cover'
import Portrait from '../src/Portrait'
import Link from 'next/link'
import SocialMedia from '../src/SocialMedia'

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

      <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

      <p>Dafür haben wir uns fürs erste im legendären Hotel Rothaus einquartiert, mitten im Zürcher Kreis 4 an der Langstrasse, genauer: an der Sihlhallenstrasse 1. Das Rothaus war viele Jahre das Winterquartier für die Artisten des Zirkus Knie, später ein Stundenhotel – keine schlechte Umgebung für publizistische Pläne.</p>

      <h3>Medienartikel zu Project R</h3>

      <ul>
        <li><a href='http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit'>Interview: «Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a></li>
        <li><a href='http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger'>Und ewig sparen die Verleger</a></li>
        <li><a href='http://presseverein.ch/2016/10/09/die-rebellion-beginnt/'>Die Rebellion beginnt</a></li>
      </ul>

      <SocialMedia />

      <p>
        <Link href='/team'><a>Team</a></Link>{' – '}
        <Link href='/media'><a>Medieninformationen</a></Link>{' – '}
        <Link href='/jobs'><a>Jobs</a></Link>
      </p>

      <p>Wenn Sie informiert bleiben wollen, bitte hier eintragen:</p>
      <Newsletter />

      <p>Danke!</p>

      <h2>Project R</h2>
      <p>c/o Hotel Rothaus<br />
      Sihlhallenstrasse 1<br />
      CH-8004 Zürich
      </p>
      <img style={{maxWidth: 50}} src='https://assets.project-r.construction/images/project_r_logo.svg' />

      <p>Spendenkonto:<br />
      Verein für unabhängigen Journalismus<br />
      Hegifeldstrasse 57<br />
      8404 Winterthur<br />
      Raiffeisenbank Winterthur<br />
      IBAN: CH12 8148 5000 0082 2840 1
      </p>
    </Layout>
  )
}
