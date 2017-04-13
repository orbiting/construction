import React from 'react'
import {css} from 'glamor'
import Link from 'next/link'

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
    title: 'So heisst das Magazin von Project R',
    description: 'Am heutigen 12. April, dem Jahrestag der Ausrufung der Helvetischen Republik, enthüllt das Medienprojekt in Bern den Namen des geplanten digitalen Magazins. Das Crowdfunding startet am 26. April.',
    image: 'https://assets.project-r.construction/images/rothaus_republik.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Hotel Rothaus mit dem Banner des Logos der Republik'
      }}
      >
        <h1>{meta.title}</h1>
        <p>«Mit Fake News, Trump, dem Aufmarsch der Autoritären in ganz Europa, dem langsamen Niedergang und Vor-sich-her-Faulen der grossen Verlage, ist eigentlich klar, dass wir jetzt handeln müssen.»</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>willkommen zum dritten Newsletter von Project R.</p>

      <div {...topPromoStyle}>
        <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
        <Newsletter />
      </div>

      <p>Dass wir uns am heutigen 12. April wieder bei Ihnen melden, ist kein Zufall. In diesen Minuten, Punkt 12 Uhr, rufen wir in Bern die Republik aus.</p>

      <p>Es handelt sich, anders als einige von Ihnen jetzt vielleicht hoffen, nicht um einen Staatsstreich. Sondern um das exakte Gegenteil: eine Taufe. Wir freuen uns, Ihnen hiermit den Namen des geplanten digitalen Magazins von Project R bekannt zu geben: «Republik».</p>

      <p>Dazu veröffentlichen wir, wie es bei der Ausrufung einer jeden Republik Brauch ist, ein Manifest. Unser Ziel war, es so umfassend wie knapp zu halten. Sie finden es hier: <Link href='https://republik.ch/manifest'>
        <a>
            republik.ch/manifest
          </a>
      </Link>.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/foto_manifest.jpg'
          alt='Fotos des Manifest der Republik' /><br />
        <figcaption style={{fontSize: 12, fontFamily: 'sans-serif', margin: 0, textAlign: 'left'}} />
      </figure>

      <p>Das Manifest hält fest, wie wir von Project R die Rolle des Journalismus für eine freiheitliche Gesellschaft verstehen. Es ist zeitlos und für die Ewigkeit geschrieben. Dabei ist die Zukunft der «Republik» noch ungewiss. Alles, nicht zuletzt 3,5 Millionen Franken Investoren- und Spendengelder, hängt vom Erfolg des kommenden Crowdfundings ab. Wir müssen mindestens 3000 Leserinnen und Leser überzeugen, die zusammen 750'000 Franken sammeln. Wie jede Republik wird auch unsere nicht von einer Handvoll Leute gegründet, sondern von vielen.</p>

      <p>Ist das Crowdfunding erfolgreich, geht «Republik» Anfang 2018 an den Start. Scheitern wir, wird das Projekt liquidiert. Der Start des Crowdfundings ist am 26. April. Sie finden uns neu auch unter <Link href='https://republik.ch'>
        <a>
            republik.ch
          </a>
      </Link>, die Project R Genossenschaft wie bisher hier: <Link href='https://project-r.construction'>
        <a>
            project-r.construction
          </a>
      </Link></p>

      <h3>Die Geburt der modernen Schweiz</h3>

      <p>Der heutige Tag ist das ideale Datum für die «Republik»-Taufe. Am 12. April 1798, vor 219 Jahren, riefen die Delegierten der Kantone die Helvetische Republik aus. Sie taten das nicht zuletzt auf Druck Napoleons. Die Republik existierte nur kurze fünf Jahre. Und war alles andere als stabil. In den fünf Jahren plünderten die Franzosen die Kassen der reichen Zürcher und Berner – während der Rest des Landes in einem unübersichtlichen Bürgerkrieg versank, in dem alle gegen alle kämpften: radikale Liberale gegen gemässigte Liberale, Untertanengebiete gegen Herrschaften, Bauern gegen Adelige, Innerschweizer gegen Welsche. Am Ende gewannen jene, die schon vorher geherrscht hatten: die Patrizier. Man zählte in der kurzen Zeit vier Staatsstreiche.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/freiheitsbaum.jpg'
          alt='Münsterplatz Basel, 22. Januar 1798, Pflanzung des Freiheitsbaumes' /><br />
        <figcaption style={{fontSize: 12, fontFamily: 'sans-serif', margin: 0, textAlign: 'left'}}>
          Nach dem Umsturz der alten Ordnung wird 1798 auf dem Basler Münsterplatz ein Freiheitsbaum aufgerichtet. (Credits: Historisches Museum Basel, Reprografie: P. Portner)
        </figcaption>
      </figure>

      <p>Der wichtigste Mann bei der Gründung der Republik war der liberale Basler Schriftsteller, Jurist und Napoleon-Anhänger Peter Ochs. Nach dem Scheitern der Revolution änderten seine Söhne ihren Namen – aus Scham. Und trotzdem hinterliess ihr Vater ein bleibendes Erbe: Es schrieb die erste moderne Verfassung der Schweiz. Mit Gewaltentrennung, Wahlen, Bürgerrecht, Freiheit von Religion und der Presse, Aufhebung der Untertanengebiete und Adelstitel.</p>

      <p>Die Pressefreiheit garantierte die Verfassung der Helvetischen Republik im schlichten, aber umfassenden Grundsatz sieben: «Die Pressefreyheit ist eine natürliche Folge des Rechtes, das jeder hat, sich unterrichten zu lassen» – also zu wissen, was vor sich geht:</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/pressefreiheit.jpg'
          alt='Auszug aus der Verfassung der helvetischen Republik zur Pressefreiheit' /><br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}} />
      </figure>

      <p>Es war die Geburt der modernen Schweiz, mitten im Chaos. Denn die Ideen der Helvetischen Republik überlebten ihr Scheitern. Und zersetzten die Herrschaft der reichen Familien. Diese hatten zuvor mit eiserner Faust regiert – nicht zuletzt durch Justizmorde. Die Schweiz war die Erfinderin dieser Praxis. Missliebige Personen wurden unter Missbrauch des Rechts abgeurteilt und umgebracht. So wurde etwa der Pfarrer, Ökonom und Statistiker Heinrich Waser am 27. Mai 1780 hingerichtet. Er hatte in der Schrift «Schweizer-Blut und Franz-Geld, politisch gegeneinander abgewogen» ausgerechnet, in welchem Ausmass die Patrizier sich am Söldnerwesen bereicherten. Das Todesurteil fiel wegen des Paragrafen «Pressevergehen».</p>

      <p>Die erste moderne Verfassung von Peter Ochs machte den Journalismus nicht nur zu einem Kind der Aufklärung, sondern zu weit mehr: ihrem Antrieb.</p>

      <h3>Das Jahrhundert des Muts</h3>

      <p>Das Erbe der Helvetischen Republik traten die Republikaner von 1848 an. Es war die einzige erfolgreiche liberale Revolution in Europa. Und sie verwirklichte in der Praxis, was in der Helvetischen Republik nur auf dem Papier stand. In kürzester Zeit wurde ein ganzes Land neu erfunden: mit einer Verfassung, die Gewaltenteilung, Gleichheit vor dem Gesetz und Wahlen garantierte, mit einem allgemeinen Schulwesen, Universitäten, unabhängigen Gerichten, Pressefreiheit. Dazu wurde eine komplette Infrastruktur aus dem Boden gestampft: die Eisenbahn, die erste Grossbank, der Gotthardtunnel.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/logo_republik.jpg'
          alt='Logo Republik' /><br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}} />
      </figure>

      <p>Dass wir von Project R unser Magazin «Republik» nennen, ist ein Bekenntnis zu dieser Tradition. Zum Ersten imponiert uns die Tatkraft der Republikaner des 19. Jahrhunderts. Auch wenn längst nicht alle von Anfang an gleichermassen davon profitierten – Frauen etwa –, so wurde der Fortschritt doch in Gang gesetzt. Es war ein Jahrhundert des Muts. Man machte überall Pläne. Und legte einfach los. In den Schriften der Radikalen und Liberalen, etwa bei Gottfried Keller, wimmelt es von Worten wie «Projekt» oder «Labor». Der gesellschaftliche Wettstreit drehte sich primär um Bauten, Reformen, Erfindungen. Man dachte gross. Fing an. Und blickte nach vorn.</p>

      <p>Zum Zweiten hat die Republik – die res publica, die öffentliche Sache – seit den Zeiten Roms zwar unendlich viele Ausprägungen erlebt, aber eines haben alle Entwürfe gemeinsam: das Konzept des Gemeinwohls und der Partizipation. Ihre politischen Köpfe dachten nicht nur an sich selbst und ihre Schicht oder Kaste, sondern an das Ganze. Dieser Blick scheint uns der richtige in einer Zeit wie heute, in der einerseits alles zusammenhängt. Und doch alles zersplittert ist: in Einzelinteressen, in tausend Meinungen und die Flut von noch mehr Nachrichten. Unser Job als junges Medium wird ein sehr traditioneller sein: nicht die Hektik zu liefern, sondern das grosse Bild, nicht zu jammern, sondern nach Möglichkeiten zu suchen, nicht die Einzelheiten zu beschreiben, sondern die Entwicklungen.</p>

      <p>Zum Dritten stehen aktuell die republikanischen Errungenschaften wieder auf dem Spiel. Zahlreiche Parteien – und in Ungarn, Polen, der Türkei, den USA und vielleicht bald auch in Frankreich sogar die Regierungen – verfolgen ein neues Modell: die autoritäre Demokratie. Im Kern besteht das Ziel autoritärer Parteien darin, nach dem Wahlsieg ihre Macht so vollständig wie möglich durchzusetzen. Und Justiz, Presse und Opposition zum Schweigen zu bringen. Mit dem Argument, dass sie als Wahlsieger die Mehrheit des Volkes verkörpern.</p>

      <h3>Der Aufmarsch der Autoritären</h3>

      <p>Es ist die Wiederkehr der Welt vor der Helvetischen Republik und vor der Revolution von 1848: die Herrschaft von Clans. Das Versprechen, das die Autoritären ihren Wählerinnen und Wählern geben, ist ein doppeltes: erstens, dass ihre Klientel profitieren wird und ihre Gegner aus allen Positionen entfernt werden. Und dass, wie unter dem Regime der Patrizier in der Schweiz, wieder Herrschaftsgebiete mit Untertanen errichtet werden, in denen unliebsame Gruppen – etwa Frauen oder Ausländer – herumdirigiert werden können.</p>

      <p>Das zweite Versprechen der autoritären Parteien ist die pure Ausübung von Macht. Damit sich endlich etwas ändert. Das ist kein kleines Versprechen in einer komplexen Welt, in der auch mächtige Leute gefesselt sind: durch Verträge, die Launen der Märkte, das Netz der Beziehungen. Die autoritären Regime beenden die Phase der Alternativlosigkeit. Und ersetzen sie durch nackte Politik: Nicht Argumente zählen, sondern deren Durchsetzung, nicht Fakten, sondern das Schaffen von Fakten, nicht Komplexität, sondern Härte, nicht die Frage, was das Klügste wäre, sondern die Frage: Bist du mit oder gegen uns?</p>

      <p>Auf den ersten Blick wirkt das autoritäre Programm frisch, roh, archaisch. Genauer betrachtet ist es Dekadenz. In ihrer Studie «Warum Nationen scheitern» untersuchten die Autoren Daron Acemoğlu und James A. Robinson in Dutzenden Fallbeispielen nach Merkmalen, die florierende und zerfallende Gesellschaften unterscheiden. Die Erkenntnisse waren verblüffend einfach. Um zu prosperieren, braucht eine Gesellschaft nur zwei Dinge: 1. Die Brechung der Macht durch starke Institutionen. Am wichtigsten ist dabei der Schutz vor Willkür durch einen stabilen Rechtsstaat. 2. Die Aufstiegsmöglichkeit von möglichst vielen, diversen Gruppen.</p>

      <p>Kurz: Das Programm der Autoritären, das auf Machtkonzentration, Isolation und Ausschluss beruht, ist kein Programm der Erneuerung. Sondern des Niedergangs.</p>

      <h3>Gegen Verwirrung hilft nur Klarheit</h3>

      <p>Für den Journalismus ist der Aufstieg der Autoritären ein Problem. Allein schon, weil jede autoritäre Regierung an der Macht als erstes die Pressefreiheit angreift. Aber auch, weil die Rolle des Journalismus als Wachhund der Demokratie in einer in Lager gespaltenen Gesellschaft nur noch schlecht funktioniert. Ein einziger der Skandale von Donald Trump hätte ihn in einer in ihren Grundwerten geeinten Gesellschaft als Politiker erledigt. In einer gespaltenen Gesellschaft werden die Recherchen der Medien jedoch zur Propaganda der Gegenseite. Das verändert die politische Dramaturgie: Im Dutzend verwandelten sich Trumps Skandale in das zentrale Argument für seine Kandidatur. Denn sie bewiesen den Wählerinnen und Wählern seine Macht. Dadurch, dass er sie sich leisten konnte.</p>

      <p>Die wichtigste Strategie der autoritären Politiker, um eine Demokratie auszuhebeln, ist Verwirrung. Dass in einer Flut von Behauptungen und Anklagen alles gleichwertig wird. Dass alle Argumente und Fakten nur Meinung sind, dass alle Experten, alle Politikerinnen, alle Journalisten und Wissenschaftlerinnen nur die Meinung ihres Lagers wiedergeben, dass alle lügen, alle bestochen sind, alle Dreck am Stecken haben. Dass also nicht das Nachdenken zählt, nicht das Argument, nicht die Erfahrung, sondern nur die Entscheidung zwischen zwei Clans.</p>

      <p>Für den politischen Journalismus bedeutet das, dass er sich Konfusion nicht mehr leisten kann. Schlechte Arbeit bedeutet heute mehr als nur schlechte Arbeit: Sie ist Parteinahme für das autoritäre Lager. Gegen die Strategie der Verwirrung hilft nur Klarheit: nicht die Klarheit einer möglichst schroffen Meinung, sondern die Klarheit beim Zeichnen von Komplexität, Zusammenhängen, Entscheidungen samt ihren Kosten. Dazu braucht es einen kleinen Schuss Mut. Im Privatleben ist das einzige Mittel gegen die Angst, auf sie zuzugehen. Im öffentlichen Leben ist das einzige Mittel zur Verbesserung der Welt ihre Durchschaubarkeit.</p>

      <p>Es lohnt sich, dafür zu kämpfen. Die Siege des autoritären Lagers waren bisher immer extrem knapp – wenn auch mit grossen Auswirkungen. Trump gewann in den entscheidenden Staaten gegen Hillary Clinton mit rund einem Prozent Unterschied. Die Masseneinwanderungsinitiative, die die Politik der Schweiz auf Jahre lähmte, wurde mit 50,3 Prozent angenommen. Letztere zeigte auch, was kämpfen bewirken kann. Bei der Masseneinwanderungsinitiative, gegen die kaum gekämpft wurde, reichten den Rechtsnationalen ihre rund 400'000 Ja-Stimmen für die knappe Mehrheit. Bei der Durchsetzungsinitiative, gegen die gekämpft wurde, reichten die rund 400'000 Stimmen nirgendwohin. Das rechtsnationale Lager kassierte eine 40:60-Prozent-Niederlage. Doch der nächste Angriff auf die Menschenrechte steht bereits bevor: die «Selbstbestimmungs»-Initiative.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/ochs_waser.jpg'
          alt='' /><br />
        <figcaption style={{fontSize: 12, fontFamily: 'sans-serif', margin: 0, textAlign: 'left'}}>
          Peter Ochs rief am 12. April 1798 in Aarau die Helvetische Republik aus, für Johann Heinrich Waser kam die erste moderne Verfassung der Schweiz zu spät: Er wurde 1780 wegen «Pressevergehen» hingerichtet.
        </figcaption>
      </figure>

      <p>Es ist die Zeit gekommen, wo um Selbstverständlichkeiten wie Rechtsstaat, Gleichheit vor dem Gesetz oder Gewaltentrennung gekämpft werden muss. Jahrzehnte waren die republikanischen Institutionen fast langweilig. Weil unbestritten. Das ist nun Vergangenheit. Historisch gesehen ist das keine Überraschung. Denn die Institutionen sind kristallisierter Kampf. Um sie zu errichten haben Generationen von Männern und Frauen – wie etwa Peter Ochs oder Heinrich Waser – Stellung, Ehre oder sogar den Kopf riskiert. Nun ist die Reihe an unserer Generation.</p>

      <p>Lang lebe die Republik!</p>

      <p>Wir melden uns wieder zum Start des Crowdfundings am 26. April.</p>

      <p>Ihre Project-R-Crew</p>

      <p>
        <br />
        PS: Die heutige Taufe der «Republik» in Bern läuft noch bis 17 Uhr. Sie findet im Kulturzentrum Progr an der Speichergasse 4 statt. Falls Sie in der Nähe sind: Herzlich willkommen!
      </p>

      <p>
        PPS: Sie finden @RepublikMagazin ab sofort auch auf <a href='https://www.facebook.com/RepublikMagazin'>Facebook</a> und <a href='https://twitter.com/RepublikMagazin'>Twitter</a>.
      </p>

      <hr style={{margin: '40px 0'}} />

      <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
      <Newsletter />
      <p>Danke!</p>

    </Layout>
  )
}
