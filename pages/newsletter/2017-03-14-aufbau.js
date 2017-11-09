import React from 'react'
import {css} from 'glamor'
import Link from 'next/link'

import Layout, {PADDING} from '../../src/Layout'
import Cover from '../../src/Cover'

const tableStyle = css({
  borderSpacing: '20px 0',
  '@media (max-width: 600px)': {
    fontSize: 14
  },
  '& th, & td': {
    textAlign: 'left',
    verticalAlign: 'top',
    borderBottom: '1px solid #000',
    paddingTop: 3,
    paddingBottom: 20
  },
  '& tr:last-child th, & tr:last-child td': {
    borderBottom: 'none'
  }
})

export default ({url}) => {
  const meta = {
    title: 'So bauen wir Project R',
    description: '',
    image: 'https://placehold.it/2000x1125?text=Foto+Konzernmodell+Tabelle',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: ''
      }}
      >
        <h1>{meta.title}</h1>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>willkommen zum zweiten Newsletter von Project R.</p>

      <p>Das letzte Mal, als die USA am Rand des Faschismus standen, war in den 1950er-Jahren. Damals jagte ein Untersuchungsausschuss unter dem Senator Joseph McCarthy tatsächliche und vermeintliche Kommunisten. Einer davon war der Krimiautor Dashiell Hammett. Hier eine Kurzfassung des Verhörs:</p>

      <blockquote>
        <em>Vorsitzender McCarthy:</em> Mr. Hammett, waren oder sind Sie Mitglied der kommunistischen Partei Amerikas?<br />
        <em>Hammett:</em> Ich verweigere die Antwort, mit der Begründung, dass eine Antwort mich belasten könnte.<br />
        <em>McCarthy:</em> Sie sind also Kommunist. Und Sie würden eine Übernahme des Kommunismus in diesem Land unterstützen.<br />
        <em>Hammett:</em> Nein.<br />
        <em>McCarthy:</em> Das würden Sie nicht?<br />
        <em>Hammett:</em> Es erschiene mir unpraktisch, eine Revolution zu machen, wenn die Leute sie nicht wollen.<br />
      </blockquote>

      <p>
        <img
          src='https://placehold.it/2000x1331?text=FOTO+UNTERSUCHUNGS-AUSSCHUSS'
          alt='FOTO+UNTERSUCHUNGS-AUSSCHUSS' />
      </p>

      <p>Exakt so wie Hammett geht es uns bei unserer Rebellion gegen die traditionellen Verlage. Es erscheint uns unpraktisch, ein Massenmedium zu gründen, wenn die Leute es nicht wollen.</p>

      <p>Vor dem Start unseres Projekts haben wir zwei Jahre lang Pläne durchgerechnet. Die schwierigste Frage dabei war die nach der Grösse: Das Magazin sollte gross genug sein, um in der öffentlichen Debatte Wirkung zu erzielen. Und schlank genug, um zu überleben und agil zu bleiben.</p>

      <p>Nach langem Hin und Her hatten wir einen Plan, der überzeugte. Doch eine Frage blieb trotz allen Rechnereien. Ausgerechnet die entscheidende: Wie gross ist der Markt? Wie viele Leserinnen und Leser sind bereit, für ein digitales Magazin, für unabhängigen Journalismus zu bezahlen?</p>

      <p>Es schien uns unfair, dieses Problem abzuwälzen. Also zu Investorinnen und Investoren zu gehen und zu sagen: Gebt uns Geld, damit wir ein paar Jahre in Sicherheit arbeiten können – selbst, wenn wir das unter Ausschluss der Öffentlichkeit tun. Deshalb beschlossen wir, noch vor den Geldgebern ins Risiko zu gehen. Und alle zugesagten Investorengelder an ein aussagekräftiges Crowdfunding zu koppeln. Schaffen wir es, dann werden die Investitionen ausgelöst. Schaffen wir es nicht, erhalten wir gar nichts. Und das Projekt ist noch vor der Geburt tot.</p>

      <p>Das Crowdfunding ist ein Markttest in der Realität. Es muss der Beweis erbracht werden, dass genügend Leute an unabhängigem Journalismus interessiert sind. Wir springen vor den Investoren von der Klippe und testen, ob das Wasser tief genug ist, damit sich niemand die Beine bricht.</p>

      <h2>Für jeden Franken von Ihnen kommen 4 Franken 66 dazu</h2>

      <p>Die erste Finanzierungsrunde ist jetzt so gut wie abgeschlossen, der Stand der Dinge ist folgender:</p>

      <ol>
        <li>Wir haben bisher 3,5 Millionen Franken an Investoren- und Spendengeldern zugesagt erhalten (also exakt die Hälfte der sieben Millionen, die wir in fünf Jahren bis zu dem Moment brauchen, in dem das digitale Magazin selbsttragend sein soll.)</li>
        <li>Damit diese Gelder ausgelöst werden, müssen wir das drittgrösste Crowdfunding überleben, das in der Schweiz je stattgefunden hat. Wir müssen mindestens 3000 Leserinnen und Leser von uns überzeugen und 750’000 Franken sammeln.</li>
      </ol>

      <p>Das heisst: Wir legen unser Schicksal in Ihre Hand. Wir werden Ihre Kühnheit, Ihr Vertrauen und nicht zuletzt etwas Geld von Ihnen brauchen. Der Start des Crowdfundings ist Ende April. Das Ganze wird knapp fünf Wochen dauern. Und wir werden etwas Lärm machen müssen.</p>

      <p>Der Mai wird also ein interessanter Monat für uns alle. Schaffen wir die Dreiviertelmillion gemeinsam nicht, wird das Projekt liquidiert. Schaffen wir sie, wird danach die Redaktion aufgebaut. Und diese ist dann bereits für knapp zwei Jahre finanziert: Für jeden Franken, den Sie riskieren, kommen 4 Franken 66 von Investorinnen und Investoren dazu.</p>

      <h2>Unser Konzernmodell</h2>

      <p>Kein Wunder, sind wir aufgeregt. Aber das entbindet uns nicht von der Pflicht, vorwärts zu planen. So gut wie fertig ist seit Ende Februar das Fundament des ganzen Unternehmens: die Rechtsform. Sie ist auf den ersten Blick kompliziert, auf den zweiten Blick klärt sie mehrere wichtige Fragen.</p>

      <p>Der junge Konzern wird, sofern er das Crowdfunding überlebt, zwei Gesellschaftsformen haben: eine Genossenschaft und eine AG.</p>

      <p>Die Project R Genossenschaft ist seit dem 26. Januar 2017 im Handelsregister eingetragen. Sie hat den Langzeitzweck, dem Journalismus seinen Platz als Wachhund in der Demokratie zu sichern. Die Aufgabe der Aktiengesellschaft wird sein, das digitale Magazin herauszugeben – mit Journalismus, der sich mit den grossen Debatten und Fragen beschäftigt, ohne Bullshit.</p>

      <p>Im Überblick sieht das so aus:</p>

      <div style={{overflowX: 'auto', overflowY: 'hidden', marginLeft: -PADDING, marginRight: -PADDING}}>
        <table {...tableStyle}>
          <tbody>
            <tr>
              <th />
              <td>
                <img
                  style={{height: 40, marginBottom: 10}}
                  src='https://assets.project-r.construction/images/project_r_logo.svg' /><br />
                Genossenschaft
              </td>
              <td>
                <img
                  style={{height: 40, marginLeft: -10, marginBottom: 10}}
                  src='https://assets.project-r.construction/images/magazine_logo.png' /><br />
                Aktiengesellschaft
              </td>
            </tr>
            <tr>
              <th>Name:</th>
              <td>Project R</td>
              <td>noch ein Geheimnis</td>
            </tr>
            <tr>
              <th>Zweck:</th>
              <td>
                <p>Alles Institutionelle.</p>
                <p>Dem Journalismus seine Rolle in der Demokratie sichern.</p>
                <p>
                  <em>Gemeinnützig;</em><br />
                  mitglieder-, spenden- und stiftungsfinanziert
                </p>
              </td>
              <td>
                <p>Alles Journalistische.</p>
                <p>Das digitale Magazin herstellen.</p>
                <p>
                  <em>Gewinnorientiert</em><br />
                  (mit dem Ziel, mindestens selbsttragend zu werden)
                </p>
              </td>
            </tr>
            <tr>
              <th>Aufgaben:</th>
              <td>
                <p>Alles, was Journalismus schützt und voranbringt</p>
                <ul>
                  <li>Entwicklung und Weiterentwicklung journalistischer Formate</li>
                  <li>Nachwuchsförderung, Aus- und Weiterbildung</li>
                  <li>Entwicklung IT-Infrastruktur (Open Source)</li>
                  <li>Veranstaltungen</li>
                  <li>Sensibilisierung von Ö̈ffentlichkeit für unabhängigen Journalismus</li>
                  <li>Mittelbescha ung, Recherchefonds — Rechtliches</li>
                  <li>Kooperationen</li>
                </ul>
              </td>
              <td>
                <p>Journalismus</p>
                <ul>
                  <li>Redaktion, Produktion und Vertrieb des digitalen Magazins</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Der Vorteil dieser Struktur ist, dass die Aufgaben klar getrennt werden:</p>

      <ol>
        <li>Die Genossenschaft kümmert sich um alles, was die Institution des Journalismus stärkt in Zeiten, in denen die traditionellen Verlage ihr Geschäft verlassen. Die wichtigste Aufgabe ist die Entwicklung von Projekten – am Anfang ist das vor allem: das Magazin. Dazu baut die Project R Genossenschaft eine digitale Infrastruktur, die auch für alle anderen – Freunde wie Konkurrenten – nutzbar ist: Alles, was wir programmieren, veröffentlichen wir Open Source. Sie macht Veranstaltungen, von Debatten bis Filmreihen. Sie finanziert journalistische Projekte und Formate. Und sie kümmert sich um die Ausbildung von jungen Journalistinnen und Journalisten.</li>
        <li>Das digitale Magazin bleibt extrem schlank. Die Produktions-AG hat nur zwei Aufgaben zu erledigen: Marketing. Und einen Journalismus, der dieses Marketing rechtfertigt.</li>
      </ol>

      <p>Sie sehen: Wir bauen ein Mutter-Kind-Modell. Am Anfang versorgt die Genossenschaft das Magazin mit allem Notwendigen: IT-Infrastruktur, Budgets für grosse Recherchen, Nachwuchs, juristischem Schutz, Abonnentinnen und Abonnenten. Das Magazin erscheint also quasi ohne Startkosten: es wird per Nabelschnur mit Geld und Schutz versorgt. Das erschien uns als beste Möglichkeit, wie leserfinanzierter Journalismus in einem kleinen, rauhen Markt eine echte Chance hat. Mit der Zeit soll die Verbindung loser werden: Das Magazin wird selbsttragend finanziert. Und die Genossenschaft kann sich weiteren journalistischen Projekten zuwenden.</p>

      <p>Präsidiert wird die Project R Genossenschaft von Nadja Schnetzler, im Vorstand sitzen Clara Vuillemin, Laurent Burst und Geschäftsführerin Susanne Sugimoto. Gratulation zur Verantwortung!</p>

      <p>
        <img
          src='https://placehold.it/2000x1331?text=FOTO'
          alt='FOTO' />
      </p>

      <h2>Die Machtfrage</h2>

      <p>Der zweite Vorteil der Doppelstruktur ist, dass eine ziemlich heikle Frage damit gelöst ist: die der Macht. Bei publizistischen Produkten ist die Frage der Unabhängigkeit zentral. Denn Medien gehören ihrem rechtlichen Besitzer nur halb – die andere Hälfte gehört der Öffentlichkeit. Das führt in der Krise zu Problemen. Etwa, wenn Besitzer politischen Einfluss nehmen wollen. Oder wenn sie den Journalismus aus Rendite-Überlegungen verkümmern lassen.</p>

      <p>Wir haben versucht, die Machtstruktur möglichst erdbebenfest zu bauen, so dass niemand als die Vernunft das Sagen hat. (Soweit Vernunft in der Publizistik reicht, da vernünftiger Journalismus immer auch etwas Verspieltes hat – eine gute Zeitung ist halb Waffe, halb Waffel.)</p>

      <p>Die Genossenschaft ist mitglieder-, spenden- und stiftungsfinanziert. Die Macht liegt hier primär in den Händen der Leserinnen und Leser. Egal, wie beeindruckend die Einlage einzelner Spender ist – in einer Genossenschaft gilt das demokratische Prinzip: one man, one woman, one vote.</p>

      <p>Die AG, also das Magazin, wird durch Investorinnen und Investoren angeschoben – und verdient ihr Geld durch Abonnements. Wir arbeiten daran, sie so zu bauen, dass keine Interessengruppe allein die Macht übernehmen kann. Die Aktionärsstruktur wird gemäss Planung wie folgt aussehen:</p>

      <ul>
        <li>Die Leserinnen und Leser, vertreten durch die Genossenschaft, halten etwas über 40 Prozent der Aktien. Sie sind der grösste Block.</li>
        <li>Die Mitarbeitenden halten knapp unter 40 Prozent der Aktien. Genug, um eine starke Stimme zu haben, aber nicht genug, um fürstliche Privilegien durchzusetzen. (So wie etwa die Print-Redaktion des «Spiegel», die 49 Prozent der Aktien hält – und sich als Herrschaftskaste eine weit schlechter bezahlte, weit rechtlosere Online-Redaktion aufgebaut hat.)</li>
        <li>Die Investoren kontrollieren rund 20 Prozent des Aktienkapitals. Sie haben am Wenigsten zu sagen. Sie werden jedoch, im Fall eines Gewinns, bei der Ausschüttung finanziell bevorzugt.</li>
      </ul>

      <p>Mit diesem Modell ist garantiert, dass ein Gleichgewicht zwischen Publikum, Mitarbeitenden und Investorinnen besteht – mindestens zwei von drei Parteien müssen hinter Entschlüssen stehen.</p>

      <p>Diese Überlegungen zur Machtbalance sind leider unumgänglich. Denn, was passiert, wenn eine Partei im Journalismus allein das Sagen hat, zeigt sich beim Blick auf die aktuelle Mediensituation.</p>

      <h2>Wie man Journalisten vor Mut schützt</h2>

      <p>Das aktuellste Beispiel: Der Verlag Ringier Axel Springer Schweiz hat Ende Januar nach 35 Jahren das angesehenste Magazin der Westschweiz geschlossen: „L’Hebdo“.</p>

      <p>Zwar hatte der Verlag der Redaktion noch die Chance gegeben, ein neues Konzept für die digitale Zukunft zu entwickeln. Die Redaktion arbeitete im Sommer und Herbst wie wild durch, dann präsentierte sie das Resultat dem Verlag. Der nannte das Konzept «ausgezeichnet» – und schloss das Magazin nur Wochen später. Und als die Redaktion, überzeugt vom Konzept, ein Management-Buy-Out vorschlug, verweigerte sich der Verlag. Mit der Begründung, die Redaktion «vor dem eigenen Mut zu schützen».</p>

      <p>Stattdessen lancierte Ringier Axel Springer Schweiz die gute Nachricht, dass die Tageszeitung «Le Temps» ein neues Beilage-Magazin erhalte – mit dem Schwerpunkt Uhren, Kosmetik und Automobil. Gleichzeitig werden bei «Le Temps» 20 Stellen gestrichen – bei Politik, Hintergrund, Kultur. Es ist der grösste Stellenabbau in der Geschichte der Zeitung.</p>

      <p>Dieses Muster werden wir in den kommenden Monaten und Jahren immer wieder sehen. Tamedia-CEO Christoph Tonini kündigte bereits weitere Zeitungsschliessungen in der Westschweiz an – und auch, dass die Redaktionen in der Deutschschweiz noch weiter ausgedünnt werden.</p>

      <h2>Verleger gehen, Oligarchen kommen</h2>

      <p>Dieser Abschied der traditionellen Verlagshäuser aus der Publizistik hat nicht zuletzt politische Folgen. Vor kurzem schrieb die «NZZ am Sonntag», dass SVP-Investoren um Walter Frey für 230 Millionen Franken die gesamte «Blick»-Gruppe übernehmen wollen. Zwar dementierte Frey – aber Dementis sind bei derartigen Deals Standard: etwa beim Verkauf der «Basler Zeitung».</p>

      <p>Der Kaufhunger der SVP ist in der Medienbranche bekannt. Christoph Blocher stand mit Tamedia zwei Mal nur Zentimeter vor einem Geschäftsabschluss – zuerst mit dem beabsichtigten Kauf der «SonntagsZeitung», später mit dem geplanten Tausch der «Basler Zeitung» gegen die Zürcher Landzeitungen plus der «Berner Zeitung». Beide Deals scheiterten nur ganz knapp an einem Veto im Verwaltungsrat.</p>

      <p>Bei der «NZZ» forderte Blocher 2014 öffentlich die Abschaffung der Vinkulierung der NZZ-Aktie: also der Klausel, die Übernahmen durch finanzkräftige Aktionäre verhindert. Währenddessen kauften SVP-nahe Personen im Hintergrund bereits blockweise NZZ-Aktien. Der aufgebaute Druck kippte die Vinkulierung zwar nicht, zeigte aber dennoch Wirkung: Ende 2014 scheiterte die Installierung von «Basler Zeitung»-Chef und Blocher-Biograf Markus Somm als «NZZ»-Chefredaktor kurz vor Unterschrift an den Protesten bei Redaktion und Leserschaft.</p>

      <p>Kurz: Eine flächendeckende Übernahme der Presse durch die grösste Partei des Landes kein unwahrscheinliches Szenario. Das sehen auch bürgerliche Beobachter so. Felix E. Müller, Chefredaktor der «NZZ am Sonntag», kommentierte das SVP-Kaufangebot an Ringier wie folgt: «Der Moment, da Medienbesitzer lieber die letzten Millionen retten als eine tapfere Anti-Blocher-Haltung mit massivem Vermögensverlust zu bezahlen, ist vielleicht näher, als man denkt.»</p>

      <p>Kein Wunder: Die SVP-Milliardäre sind auf dem ausgebluteten Medienmarkt die einzigen verbleibenden Käufer. Auch deshalb attackiert ihre Partei die SRG: Als zukünftig letzte verbleibende Konkurrenz. Falls die SRG die Angriffe überhaupt überlebt.</p>

      <p>Dabei müsste sich die harte Rechte nicht einmal so sehr anstrengen. Hier der Schluss des Verhörs von Hammett durch McCarthy:</p>

      <blockquote>
        <em>McCarthy:</em> Würden Sie, falls Sie den Kommunismus bekämpften, in staatlichen Bibliotheken die Bücher von kommunistischen Autoren aufkaufen?<br />
        <em>Hammett:</em> Nun ja, falls ich den Kommunismus bekämpfte: Ich glaube nicht, dass ich es tun würde, indem ich den Leuten überhaupt Bücher geben würde.<br />
        <em>McCarthy:</em> Von einem Autor hört sich das ungewöhnlich an. Sie sind entlassen.<br />
      </blockquote>

      <p>Dashiell Hammett hatte Recht. Nicht nur, wenn es um den Kommunismus geht – sondern überhaupt um Ideen. Ohne Bücher, ohne funktionierende Presse, setzt sich die vorhandene Macht widerspruchslos durch. Auch in der perfektesten Demokratie fallen ohne vernünftige Informationen unvernünftige Entscheidungen.</p>

      <p>Und deshalb tun wir, was wir tun: ein neues Modell bauen, um die Zukunft des unabhängigen Journalismus zu sichern. Dafür werden wir im Mai Ihre Hilfe brauchen – und etwas Geld.</p>

      <p>Was Sie schon jetzt tun können: uns weiterempfehlen.</p>

      <p>Danke für Ihre Aufmerksamkeit! Sobald wir wieder Neuigkeiten haben, hören Sie von uns.</p>

      <p>Ihre Project R-Crew</p>

      <p>Nadja Schnetzler, Susanne Sugimoto, Laurent Burst, Clara Vuillemin, Thomas Preusse, Patrick Recher, Richard Höchner, Christof Moser, Constantin Seibt und alle Komplizinnen und Komplizen im Hintergrund</p>

      <hr />

      <p>
        PS: Eine der wichtigsten Jobs einer neu gedachten, leserfinanzierten Redaktion ist, dass wir nicht einfach nur von der Kanzel herunter predigen. Sondern, dass wir auch auch zuhören werden. Und Leute miteinander vernetzen. Dafür haben wir die ideale Person gefunden. Willkommen an Bord, Richard Höchner!<br />
        <Link href='/crew'>
          <a>
            project-r.construction/crew
          </a>
        </Link>
      </p>

      <p>
        PPS: Am 10. Januar haben wir Sie zu einer spontanen Party eingeladen, um mit Ihnen an unserem Geschäftssitz im Hotel Rothaus in Zürich anzustossen. Das Ergebnis war überwältigend: Obwohl wir kurzfristig einluden, kamen über 500 von Ihnen! Danke, es war eine Freude, Sie kennen zu lernen! Den elegantesten Partybericht schrieb persoenlich.com. Die Branchen-Website verglich die Project-R-Party mit der Dreikönigstagung der Schweizer Verleger, die gleichentags stattgefunden hat. Und das mit einigem Charme.<br />
        <a href='http://www.persoenlich.com/medien/von-den-konigen-zu-den-rebellen'>
          persoenlich.com/medien/von-den-konigen-zu-den-rebellen
        </a>
      </p>

      <p>
        PPPS: Wir suchen ab Sommer 2017 weitere zwei clevere Programmierer (oder noch besser: Programmierinnen!).<br />
        <Link href='/jobs'>
          <a>
            Job-Beschrieb
          </a>
        </Link>
      </p>

    </Layout>
  )
}
