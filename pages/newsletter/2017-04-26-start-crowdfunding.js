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
    title: 'Startschuss Crowdfunding für «Republik»',
    description: 'TODO',
    image: 'https://assets.project-r.construction/images/screen_crowdfunding.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'iPhone Bildschirm mit Website Crowdfunding für Republik'
      }}>
        <h1>Startschuss Crowdfunding für&nbsp;«Republik»</h1>
        <p>«Während Sie ein vernünftiges Leben führen — mit Familie, Job, Hobby —, arbeiten wir uns durch den Staub der Welt. Und liefern Ihnen das Wesentliche. Mit Ihrem Abonnement finanzieren Sie sich quasi ein privates Expeditionsteam in die Wirklichkeit.»</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>willkommen zum vierten Newsletter von Project R. Er ist kürzer als seine Vorgänger, aber nicht ohne Dramatik. Denn das lange angekündigte Crowdfunding läuft ab heute.</p>

      <div {...topPromoStyle}>
        <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
        <Newsletter />
      </div>

      <p>Wer es eilig hat, findet es hier: <a href='https://www.republik.ch'>republik.ch</a></p>

      <p>Damit ist die Zeit der Entscheidung gekommen. Der Entscheidung für Sie, ob Sie bei uns an Bord sein wollen: als Abonnentin oder Abonnent der «Republik» und Mitbesitzerin oder Mitbesitzer unseres Unternehmens. Es ist auch die Entscheidung, ob das Unternehmen überhaupt existieren wird.</p>

      <p>Unser Crowdfunding gleicht einem Sprung von der Klippe. Bis jetzt haben Investorinnen und Spender rund 3,5 Millionen Franken zugesagt. Doch die Gelder sind an eine Bedingung gebunden: dass wir bis Ende Mai mindestens 3000 zukünftige Leserinnen und Leser finden, die mindestens 750’000 Franken für ihr Abonnement ausgeben. Schaffen wir das, werden die Gelder ausgezahlt. Und das digitale Magazin «Republik» ist für die ersten zwei Jahre so gut wie finanziert. Scheitern wir, fliesst kein Geld. Und wir liquidieren die Firma.</p>

      <p>Die Bedingungen sind hart, aber vernünftig. Denn es macht keinen Sinn, ein Massenmedium zu gründen, wenn die Leute es nicht wollen. Ausserdem schien uns ein Test per Crowdfunding das richtige Modell zu sein: Denn wir wollen einen Journalismus, der der Öffentlichkeit verpflichtet ist. Und von niemandem abhängig ist – ausser von seinen Leserinnen und Lesern.</p>

      <p>Das gilt für den Start. Aber auch für die Jahre danach. «Republik» wird sich ohne Werbung finanzieren. Und damit ohne Ablenkung von den eigentlichen Kundinnen und Kunden: Ihnen. Das Magazin wird für Sie brauchbare Ware produzieren müssen, sonst überlebt es nicht. Seine Aufgabe wird sein, Ihnen Klarheit, Haltung, Ideen und gelegentlich Ärger zu liefern. Und darüber hinaus Ihre Zeit nicht zu verschwenden. Also Journalismus ohne Bullshit.</p>

      <p>Im Kern sehen wir uns als Dienstleistung für kluge Menschen in einer komplexen Welt. Sie leben ein vernünftiges Leben: mit Job, Familie, Hobby. Sie haben nicht die Zeit, sich 24 Stunden am Tag um allen Lärm der Welt zu kümmern. Wir haben sie. Unser Job als «Republik»-Redaktion werden die grossen Themen, Debatten, Fragen sein – kurz: alles, was lärmig, verwickelt oder unklar ist. Mit einem Abonnement der «Republik» mieten Sie sich quasi ein Expeditionsteam in die Wirklichkeit. Wir rennen, recherchieren und fragen für Sie. Und liefern Ihnen dann – mal als Konzentrat, mal als Panorama – die Fakten und Zusammenhänge. Als Grundlagen für Ihre eigenen Überlegungen und Entscheidungen.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/manifest_rothaus.jpg'
          alt='Das Manifest hängt am Balkon des Hotel Rothaus' />
        <br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}} />
      </figure>

      <p>Sind Sie beim Crowdfunding an Bord, werden Sie für ein Jahr Abonnentin oder Abonnent der «Republik». Und – als Zeichen, dass wir Sie ernst nehmen – auch Gründungsmitglied der Project R Genossenschaft. Kurz: Sie werden ein wenig Verlegerin oder Verleger. Und als solche oder solcher erhalten Sie auch die Privilegien eines Verlegers: den Einblick in die wichtigsten Entscheide der Redaktion. Und ein Ohr für Ihre Vorschläge und Ihren gelegentlichen Zorn.</p>

      <p>Ihr Risiko dabei ist begrenzt. Es beträgt exakt 240 Franken pro Jahr. Wir haben es wie folgt berechnet: Es ist der Preis, den man zahlt, wenn man ein Jahr lang jede Woche einmal im Restaurant einen Kaffee trinkt.</p>

      <p>Im Fall eines Scheiterns des Crowdfundings beträgt Ihr Risiko übrigens null. Alle Zahlungen gehen bis zum Erreichen des Ziels auf ein Sperrkonto. Scheitern wir, wird Ihnen das Geld zurückbezahlt.</p>

      <p>Dafür machen Sie als Neuverlegerin im Falle eines erfolgreichen Crowdfundings kein schlechtes Geschäft: Für jedes Abonnement riskieren die Investoren 1118.40 Franken dazu.</p>

      <p>Kurz: Mit der Investition von einem Kaffee pro Woche können Sie einiges bewirken. Sie machen tatsächlich einen Unterschied: Denn ohne Sie wird es nie gelingen, im Mediensystem ein neues Modell für unabhängigen Journalismus zum Laufen zu bringen.</p>

      <p>Und damit ein weiteres Mal der Link zum Crowdfunding: <a href='https://www.republik.ch'>republik.ch</a></p>

      <p>Das also war die Klippe, über die wir gerade springen. Zugegeben, wir tun es nicht ohne Schaudern. Denn ob wir lebendig landen, ist Ihre Entscheidung.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/taufe_bern.jpg'
          alt='Taufe des Namen und Logo in Bern' /><br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}} />
      </figure>

      <p>Aber etwas wirklich Neues baut man nie allein, sondern nur gemeinsam. So wie eine Republik nie von einer Handvoll Leute gegründet wird. Sondern von vielen.</p>

      <p>Willkommen an Bord!</p>

      <p>Die Crew von Project R und «Republik»</p>

      <p>Laurent Burst, Nadja Schnetzler, Clara Vuillemin, Thomas Preusse, Patrick Recher, Susanne Sugimoto, Richard Höchner, François Zosso, Andrea Arezina, Christof Moser, Constantin Seibt</p>

      <p>
        <br />
        PS: Um die Spannung gerecht zu teilen, werden wir Sie bis zum Abschluss des Crowdfundings am 31. Mai regelmässig über den Stand der Dinge informieren.
      </p>

      <p>PPS: Ein Alles-oder-nichts-Unternehmen wie dieses Crowdfunding braucht einen erfahrenen Kopf. Deshalb haben wir bis Ende Mai den erfahrensten eingestellt. Er gehört Andrea Arezina (32). Und arbeitete für die zwei härtesten Abstimmungskampagnen der letzten Jahre. Gewonnen hat Arezina beide: Diesen Frühling wurde die Unternehmenssteuerreform III abgelehnt. So wie im Frühling davor die Durchsetzungsinitiative. Gegen diese Initiative organisierte die Kampagnenstrategin für den «Dringenden Aufruf» das erfolgreichste Crowdfunding der Schweiz. Erwartet wurden 125’000 Franken. Es kamen 1,1 Millionen Franken. Egal, wo man politisch steht: Andrea Arezina ist zweifellos eine Frau, die einen Unterschied macht. Arezina sagt über sich, sie lebe und arbeite gerne exzessiv. Momentan tut sie Letzteres.</p>

      <p>PPPS: Der Rat von Andrea Arezina für diesen Newsletter lautete: Vergesst nicht, am Ende noch einmal den Link zum Crowdfunding zu erwähnen. Das ist hiermit getan: <a href='https://www.republik.ch'>republik.ch</a></p>

      <p>Danke, Andrea. Und ein Danke an Sie, dass Sie dabei sind.</p>

      <hr style={{margin: '40px 0'}} />

      <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
      <Newsletter />
      <p>Danke!</p>

    </Layout>
  )
}
