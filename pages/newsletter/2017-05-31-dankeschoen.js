import React from 'react'
import {css} from 'glamor'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'
import Newsletter from '../../src/Newsletter'

const topBreak = 700
const topPromoStyle = css({
  padding: '0 0 20px 20px',
  maxWidth: 280,
  fontSize: 14,
  float: 'right',
  [`@media (max-width: ${topBreak}px)`]: {
    display: 'none'
  },
  '@media (min-width: 800px)': {
    marginRight: -80
  }
})

export default ({url}) => {
  const meta = {
    title: 'Ein starkes Signal für den Journalismus',
    description: 'Eine Republik wird nie von wenigen Leuten gegründet, sondern immer nur von vielen. Und das haben Sie in den letzten fünf Wochen tatsächlich gemeinsam mit uns getan: eine Republik gegründet.',
    image: 'https://assets.project-r.construction/images/testimonials_collage.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Eine Collage der Verlegerinnen'
      }}>
        <h1>Dankeschön</h1>
        <p>Stay hungry. Stay foolish.</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>in seiner ber&uuml;hmten Rede an der Stanford-Universit&auml;t gab Steve Jobs den Studenten den Rat: &laquo;Stay hungry. Stay foolish.&raquo;</p>

      <p>Sie haben Hunger bewiesen. Und Verr&uuml;cktheit. Und haben einen Unterschied gemacht. Sie haben in einer Branche, die vor allem schlechte Nachrichten kennt, ein Unternehmen gegr&uuml;ndet. Und damit ein neues Modell f&uuml;r den Journalismus erm&ouml;glicht: die Republik.</p>

      <p>Kurz, Sie haben etwas getan. Am Ende waren es XXXXXXXXXXXXXXXXXX Menschen wie Sie. Aber jeder und jede von Ihnen hat einzeln eine Entscheidung getroffen.</p>

      <p>Wir haben im letzten Monat mit vielen von Ihnen gesprochen. Und wissen, dass Sie aus vielen verschiedenen Gr&uuml;nden bei uns an Bord sind: aus Verantwortung f&uuml;r das Gemeinwesen. Aus Interesse an der Welt. Aus Sorge um das Mediensystem. Aus Neugier.</p>

      <p>Wir danken jedem Einzelnen von Ihnen daf&uuml;r. Und sind Ihnen verpflichtet. Nicht zuletzt, weil Ihre Stimme die einzige ist, die z&auml;hlt. Denn wir haben keine Werbung. Und keine Stimmenmehrheit der Investoren. Wir haben also keinen anderen Kunden als: Sie. Und niemanden sonst in der Chefetage.</p>

      <p>Bei der Republik werden Sie folglich (zu einem kleinen Teil) Verlegerin oder Verleger. Als solche oder solcher werden wir Sie regelm&auml;ssig informieren: &uuml;ber alle Zahlen, Fehler, Erfolge und die wichtigen Entscheidungen in der Redaktion. Und werden Sie gelegentlich um eine Entscheidung bitten &ndash; aber nur, wenn wir die Antwort wirklich h&ouml;ren wollen. Und wir werden Ihre Kritik und Ihre Vorschl&auml;ge f&uuml;r Themen entgegennehmen. Auch wenn wir nicht alle umsetzen. (Letzteres ist das Schicksal aller Verleger dieses Planeten. Es gibt keinen Grund, dass es Ihnen besser gehen sollte.)</p>

      <p>Unter diesem <a href="https://www.republik.ch/updates/portraets" target="_blank">Link</a> finden Sie stellvertretend drei Vertretungen der Verlagsetage: die j&uuml;ngste, den &auml;ltesten und den, der am weitesten entfernt wohnt.</p>

      <p>
        <a href="https://www.republik.ch/updates/portraets">
        <img
          src='https://assets.project-r.construction/images/testimonials_collage.jpg'
          alt='Eine Collage der Verlegerinnen' />
        </a>
      </p>

      <p>In den letzten Tagen haben uns viele Leute gewarnt. Und uns geraten, die Erwartungen zu d&auml;mpfen. Weil wir sonst scheitern w&uuml;rden. Wir sehen das nicht so. Wir heissen Ihre Erwartungen willkommen. Es ist ein Fehler, seine Hoffnungen kleinzuhalten in der Hoffnung, keine Entt&auml;uschungen zu erleben. Sie haben uns 240 Franken gezahlt. Und Ihr Vertrauen geschenkt. Sie haben ein Recht auf Erwartungen.</p>

      <p>Nun ist es an uns, den richtigen Plan daf&uuml;r umzusetzen. Wir werden in den n&auml;chsten Monaten daran arbeiten, etwas Brauchbares, N&uuml;tzliches, Sch&ouml;nes auf die Beine zu stellen. Nat&uuml;rlich werden wir nicht von Anfang an perfekt sein. Und auch sp&auml;ter nie. Aber es ist unsere Aufgabe, Ihrem Vertrauen gerecht zu werden. Und im Hintergrund eine solide Firma zu bauen. Und ein Magazin zu entwickeln, das Ihnen Klarheit, Ideen und Vergn&uuml;gen verschafft. Das Sie zwar gelegentlich &auml;rgert. Aber auch immer wieder stolz macht, Verlegerin oder Verleger der &laquo;Republik&raquo; zu sein.</p>

      <p>Dazu brauchen Sie noch sechs Monate Geduld. Und wir noch sechs Monate Arbeit. Aber im Januar 2018 geht es los! Wir sind auch gespannt, wie es wird.</p>

      <p>Heute bleibt uns nur, Ihnen ein letztes Mal zu danken. Ohne Sie w&auml;re dieses Unternehmen nicht m&ouml;glich. Eine Republik wird nie von wenigen Leuten gegr&uuml;ndet, sondern immer nur von vielen. Und Sie haben das in den letzten f&uuml;nf Wochen tats&auml;chlich gemeinsam mit uns getan: eine Republik gegr&uuml;ndet.</p>

      <p>
        <a href="https://www.republik.ch/?play=1">
        <img
          src='https://assets.project-r.construction/images/XXXXXXXXX.jpg'
          alt='Video: Danke!' />
        </a>
      </p>

      <p>Wir freuen uns auf ein gemeinsames 2018.</p>

      <p><em>Ihr Team der Republik und von Project R</em></p>

      <p><em>Clara Vuillemin, Laurent Burst, Nadja Schnetzler, Richard H&ouml;chner, Susanne Sugimoto, Patrick Recher, Thomas Preusse, Andrea Arezina, Christof Moser, Constantin Seibt</em></p>

    </Layout>
  )
}
