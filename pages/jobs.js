import React, {Component} from 'react'
import {css} from 'glamor'

import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Link from 'next/link'

import {clara} from '../src/data/team'

const buttonLinkStyle = css({
  display: 'inline-block',
  fontFamily: 'sans-serif',
  verticalAlign: 'bottom',
  color: '#444',
  padding: '10px 20px 10px 20px',
  border: 'solid #444 1px',
  textDecoration: 'none',
  backgroundColor: 'white',
  fontSize: 14,
  height: 37,
  boxSizing: 'border-box',
  minWidth: 110,
  ':hover': {
    background: '#444',
    color: 'white !important'
  }
})

class ImageSequence extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  next () {
    let index = this.state.index + 1
    if (index >= this.props.srcs.length) {
      index = 0
    }
    this.setState({index})
    this.timeout = setTimeout(() => this.next(), 400)
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }
  render () {
    const {index} = this.state
    const {srcs, alt} = this.props

    const start = (e) => {
      e.preventDefault()
      this.next()
    }
    const end = () => {
      clearTimeout(this.timeout)
      this.setState({index: 0})
    }

    return (
      <div
        style={{
          position: 'relative',
          lineHeight: 0,
          marginBottom: 10
        }}
        onTouchStart={start}
        onTouchEnd={end}
        onMouseEnter={start}
        onMouseLeave={end}>
        <img
          alt={alt}
          src={srcs[0]} />
        {
          srcs.map((src, i) => (
            <img
              key={i}
              alt=''
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                opacity: i === index ? 1 : 0,
                transition: 'opacity 300ms'
              }}
              src={src} />
          ))
        }
      </div>
    )
  }
}

export default ({url}) => {
  const meta = {
    title: 'Project R sucht zwei Entwickler/innen',
    description: 'Project R ist eine Rebellion gegen die traditionellen Verlage: Es will die Medienwelt entscheidend verändern.',
    image: 'https://assets.project-r.construction/images/wewantyou.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        credit: 'Foto: Jan Bolomey für Project R',
        src: 'https://assets.project-r.construction/images/wewantyou.jpg',
        alt: 'Das Project R Team auf dem Balkon des Hotel Rothaus'}}
      >
        <h1>Jobs bei Project&nbsp;R</h1>
        <p>Wir suchen zwei Entwickler/innen</p>
      </Cover>
    )}>
      <p>Project R ist eine Rebellion gegen die traditionellen Verlage: Es will die Medienwelt entscheidend verändern. Eine entschlossene Crew entwickelt ein digitales Magazin für den Journalismus des 21. Jahrhunderts. In allen Bereichen sind Spezialistinnen am Werk: bei der Publizistik, der Geschäftsentwicklung, der Zusammenarbeit, dem Community Building und der IT. Wir arbeiten kollaborativ und ohne steile Hierarchien. Arbeitsort ist das Hotel Rothaus an der Zürcher Langstrasse. Mehr zu Project R hier: <Link href='/'><a>project-r.construction</a></Link></p>

      <p>Gleichberechtigung und Diversität sind für uns eine Herzenssache. Bereits heute profitiert ein sehr diverses Team in Wissen und Erfahrung voneinander.  Mit dem Aufbau der Redaktion werden wir Sommer 2017 starten – derzeit stellen wir noch keine Journalistinnen und Journalisten an.</p>

      <h3>Zur Verstärkung unserer IT-Crew suchen wir zwei Web-Entwickler/innen.</h3>

      <p>Arbeitsbeginn: Juni 2017, 60-100%, projektbasiert bis Januar 2018, Verlängerung nach Absprache.</p>

      <p><strong>Wir</strong> sind daran, die beste User-Experience für journalistische Inhalte zu bauen. Und die besten Tools für digitale Journalistinnen. Wir sind eine kleine, qualifizierte, hart arbeitende, leidenschaftliche und fröhliche Crew. Wir arbeiten sehr eng mit dem ganzen Team von Project R zusammen. Wir machen alles, von den Requirements bis zum Hosting. Wir sind vollständig Open-Source. Code, den wir schon veröffentlicht haben, findest du hier: <a href='github.com/orbiting'>github.com/orbiting</a></p>

      <p><strong>Du</strong> bist entweder eine erfahrene Node.js-Entwicklerin oder ein Frontend Engineer, der schon mit React oder ähnlichem gearbeitet hat. Du hast mit einigen unserer zentralen Technologien Erfahrung:  Node.js, React and React Native, GraphQL, Next.js, SQL (PostgreSQL), Docker, Kubernetes, Contenteditable-Editors (e.g. Slate, Draft.js), D3.js. Dir liegt die Zukunft des Journalismus am Herzen (und du glaubst nicht, dass Social Media die Lösung ist).</p>

      <ImageSequence
        srcs={[
          'https://assets.project-r.construction/images/it-0.jpg',
          'https://assets.project-r.construction/images/it-1.jpg',
          'https://assets.project-r.construction/images/it-2.jpg'
        ]}
        alt='Thomas, Clara und Patrick lachen in die Kamera' />

      <p>Thomas Preusse (links auf dem Bild): Frontend Engineer, ehemals Interactiv&nbsp;Things und NZZ. Begeistert von Daten-Visualisierungen und seinen journalistischen Anwendungen. Versucht das Leben selbst in einen Bubble Chart zu verwandeln. Verwendet nie eine Technologie, die schon in Beta ist.</p>

      <p>Patrick Recher (rechts): Backend- und DevOps-Engineer, skaliert dein App von null auf zwanzig Pods in sechs Sekunden (haben wir gerade gemessen). Scheint eine Obsession für referentielle Integrität zu haben, kompensiert dies aber mit JavaScript im Backend. Immer in seinem Zimmer, trotzdem ein Nomade.</p>

      <p>Clara Vuillemin: die Chefin, die coden kann. Wenn du sagst es sei unmöglich, schreibt sie übers Wochenend einen Prototyp und beweist das Gegenteil. Zu jung (oder smart), um zu wissen «wie man es richtig macht» und vertraut dem gesunden Menschenverstand. Hat tatsächlich einen Uni-Abschluss (in Elektrotechnik).</p>

      <p>
        Bewerbungen bitte an: {clara.name}<br />
        <a href={`mailto:${clara.email}`}>{clara.email}</a>
      </p>
      <p><a href={`mailto:${clara.email}?${[
          ['subject', 'Bewerbungen Entwickler/in'],
          ['body', `Hallo Clara,\n\n...\n\nHerzliche Grüsse,\ngithub.com/[username]`]
      ].map(pair => pair.map(encodeURIComponent).join('=')).join('&')}`} {...buttonLinkStyle}>Jetzt bewerben</a></p>
    </Layout>
  )
}
