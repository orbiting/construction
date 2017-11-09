import React from 'react'
import Layout from '../src/Layout'
import Cover from '../src/Cover'
import Newsletter from '../src/Newsletter'

export default ({url}) => {
  const meta = {
    title: 'Das erste Projekt: Die «Republik»',
    description: '«Ohne Journalismus keine Demokratie. Und ohne Demokratie keine Freiheit.»',
    image: 'http://localhost:8000/images/optimized/balkon.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'http://localhost:8000/images/optimized/header_projekte.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
      >
        <h1>Das erste Projekt: Die «Republik»</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>
      <p>Die «Republik» ist eine kleine Rebellion. Für den Journalismus. Und gegen die Medienkonzerne. Denn die grossen Verlage verlassen die Publizistik: Sie bauen sich in hohem Tempo in Internethandelshäuser um. Das ist eine schlechte Nachricht für den Journalismus. Aber auch für die Demokratie. Denn ohne vernünftige Informationen fällt man schlechte Entscheidungen.</p>

      <p>Eine funktionierende Demokratie braucht funktionierende Medien. Und dafür braucht es nicht nur Journalistinnen und Journalisten, sondern auch Sie. Als Leserinnen und Leser. Als Bürgerinnen und Bürger. Als Menschen, die bereit sind, etwas Geld in unabhängigen Journalismus zu investieren.</p>

      <p>Im Mai 2017 kamen über ein Crowdfunding fast 14\'000 Menschen zusammen, die den Start der «Republik» möglich gemacht haben.</p>

      <p>Die «Republik» wird ein digitales Magazin für die öffentliche Debatte – für Politik, Wirtschaft, Gesellschaft. Die «Republik» ist werbefrei und unabhängig. Wir sehen uns als Service. Während Sie ein vernünftiges Leben führen – mit Familie, Job, Hobby –, arbeiten wir uns durch den Staub der Welt. Und liefern Ihnen das Wesentliche. Mit Ihrem Abonnement finanzieren Sie sich quasi ein privates Expeditionsteam in die Wirklichkeit.</p>

      <p>Die Redaktion, die das leistet, besteht aus sehr verschiedenen Leuten. Sie unterscheiden sich durch ihr Alter, ihre Herkunft, ihre Fähigkeiten – und sind je zur Hälfte männlich und weiblich. Diversität erscheint uns als ein gutes Gegengift gegen blinde Flecken. Wichtig ist uns im Unternehmen die enge Verzahnung von Journalismus, IT und Verlag. Und bei unseren Angestellten Können, Leidenschaft und Mut. Denn wenn wir unseren Job schlecht machen, gibt es keine Ausrede. Unser einziges Produkt ist vernünftiger Journalismus. Wir haben keine Ablenkung durch ein Tagesgeschäft mit News. Und unser einziger Kunde sind <a href='https://www.republik.ch/community'>Sie</a>.<br />
      Den Bauplan der «Republik» finden Sie <a href='https://www.project-r.construction/newsletter/2017-03-15-aufbau'>hier</a>.
      </p>

      <p>
      Unterstützen können Sie uns, indem Sie <a href='https://www.republik.ch/pledge'>hier</a> eine Mitgliedschaft bei der Project R Genossenschaft abschliessen.
      </p>

      <h3>Ausblick</h3>

      <p>Zurzeit fliesst all unsere Energie in die «Republik». Wir haben die Maschine auf die Startbahn geschoben, nun muss sie abheben. Doch auch für die Zeit danach haben wir viel vor. Unter anderem wollen wir jetzt und in Zukunft 
      </p>
      <ul>
        <li>dafür sorgen, dass der mit jährlich 240\'000 Franken dotierte Fonds für grosse Recherchen, grosse Geschichten und grosse Ideen bestmöglich eingesetzt wird – sodass mit dem Geld wegweisende Storys finanziert werden. Solche, die für die Bürgerinnen und Bürger relevant sind. Die Debatten auslösen. </li>
        <li>Menschen zusammenbringen und vernetzen, die wie wir dafür brennen, dass sich der Journalismus weiterentwickelt. Damit Bürgerinnen und Bürger all die Informationen erhalten, die sie brauchen, um gute Entscheidungen zu treffen. </li>
        <li>die Softwareentwicklung für die «Republik» finanzieren und den Code als Open Source allen zur Verfügung stellen, die damit arbeiten wollen.</li>
        <li>uns für Medienvielfalt, unabhängigen Journalismus und eine konstruktive Medienpolitik einsetzen. 
neue journalistische Erzählformen entwickeln. </li>
        <li>den Diskurs über all das fördern, was Medienunternehmen in Zukunft brauchen: Werkzeuge, Plattformen, Geld, Schutz, Wissen, Communitys und noch vieles mehr.</li>
        <li>dazu beitragen, dass Kinder und Jugendliche in der Schule oder nach der Schule lernen, wie Medien funktionieren. Wir wollen ihnen zeigen, wie man kritisch liest, wie man sich einmischt und warum das wichtig ist.</li><li>Journalistinnen und Journalisten ausbilden – und eine Akademie für unternehmerischen Journalismus begründen. </li>
        <li>anderen helfen, eigene journalistische Projekte anzuschieben, indem wir sie mit Coaching, Rechtsberatung, Arbeitsplätzen und Kontakten unterstützen.</li>
        <li>neue, unabhängige Medien, die den Leser und die Leserin in den Mittelpunkt stellen, fördern und unterstützen. </li>
        <li>dazu beitragen, dass in der Schweiz konstruktive Debatten zu den wichtigen Themen geführt werden. Wir wollen erforschen, unter welchen Voraussetzungen diese Debatten für alle Beteiligten wertvoll sind.</li>
      </ul>

      <p>Sobald sich etwas tut bei Project R, werden wir Sie informieren. Tragen Sie sich hier für unseren Newsletter ein und folgen Sie uns auf <a href='https://www.facebook.com/ProjectRGenossenschaft/'>Facebook</a> oder <a href='https://twitter.com/_Project_R'>Twitter</a>. Dann sind Sie immer auf dem neuesten Stand.</p>
      <Newsletter />
    </Layout>
  )
}
