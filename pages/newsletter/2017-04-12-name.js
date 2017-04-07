import React from 'react'
import {css} from 'glamor'
import Link from 'next/link'

import Layout, {PADDING} from '../../src/Layout'
import Cover from '../../src/Cover'
import Newsletter from '../../src/Newsletter'

const tableStyle = css({
  borderSpacing: '20px 0',
  '@media (max-width: 600px)': {
    fontSize: 14
  },
  '@media (min-width: 321px) and (max-width: 600px)': {
    borderSpacing: '10px 0'
  },
  '& th': {
    fontStyle: 'italic'
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
    title: '', //TODO
    description: '', //TODO
    image: 'https://assets.project-r.construction/images/enterprise_with_hand.jpg', //TODO
    url: `https://project-r.construction${url.pathname}`
  }
  
//TODO
  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'
      }}
      >
        <h1>{meta.title}</h1>
        <p>«Wenn die Verleger aus der Publizistik ausgestiegen sind, ist es zu spät. Es ist wichtig, dass wir jetzt schon handeln und ein Auffangmodell für den Journalismus des 21. Jahrhunderts entwickeln.»</p>
      </Cover>
    )}>

      <p>Ladies and Gentlemen,</p>

      <p>willkommen zum dritten Newsletter von Project R.</p>

      <div {...topPromoStyle}>
        <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
        <Newsletter />
      </div>
      
      <p>Dass wir uns am heutigen 12. April wieder bei Ihnen melden, ist kein Zufall. In diesen Minuten, Punkt 12 Uhr, rufen wir in Bern die Republik aus.</p>
      
      <p>Es handelt sich, anders als einige von Ihnen jetzt vielleicht hoffen, nicht um einen Staatsstreich. Sondern um das exakte Gegenteil: eine Taufe. Wir freuen uns, Ihnen hiermit den Namen des geplanten digitalen Magazins von Project R bekannt zu geben: „Republik“.</p>

      <p>Dazu veröffentlichen wir, wie es bei der Ausrufung einer jeden Republik Brauch ist, ein Manifest. Unser Ziel war, es so umfassend wie knapp zu halten. Sie finden es hier: <Link href='https://republik.ch/manifest'>
          <a>
            republik.ch/manifest
          </a>
        </Link>.</p>
      
      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/hammett_mccarthy.jpg'
          alt='Senator Joseph McCarthy nimmt den Schwur von Autor Dashiell Hammett im «Permanent Investigating Committee» des Senats ab' /><br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}}>
          Photo by Hank Walker/The LIFE Picture Collection/Getty Images
        </figcaption>
      </figure>

      <p>Das Manifest hält fest, wie wir die Rolle des Journalismus für eine freiheitliche Gesellschaft verstehen. Es ist zeitlos und für die Ewigkeit geschrieben. Dabei ist die Zukunft der „Republik“ noch ungewiss. Alles, nicht zuletzt 3,5 Millionen Franken Investorengelder, hängt vom Erfolg des kommenden Crowdfundings ab. Wir werden mindestens 3000 Leserinnen und Leser brauchen, die bereit sind, zusammen 750 000 Franken zu investieren. Wie jede Republik wird auch unsere nicht von einer Handvoll Leute gegründet, sondern von vielen.</p>

      <h3>Der Start des Crowdfundings ist am 26. April. Sie finden uns neu auch unter www.republik.ch.</h3>

      <p>Der heutige Tag ist das ideale Datum für die Tauffeier. Am 12. April 1798, vor 219 Jahren, riefen die Delegierten der Kantone die „Helvetische Republik“ aus. Sie taten das nicht zuletzt auf Druck Napoleons. Die Republik existierte nur kurze fünf Jahre. Und war alles andere als stabil. In den fünf Jahren plünderten die Franzosen die Kassen der reichen Zürcher und Berner – während der Rest des Landes in einem unübersichtlichen Bürgerkrieg versank, in dem alle gegen alle kämpften: Radikale Liberale gegen gemässigte Liberale, Untertanengebiete gegen Herrschaften, Bauern gegen Adelige, Innerschweizer gegen Welsche. Am Ende gewannen jene, die schon vorher geherrscht hatten: die Patrizier. Man zählte in der kurzen Zeit vier Staatsstreiche.</p>
      
      <p>Der wichtigste Mann bei der Gründung der Republik war der der Basler Liberale und Napoleon-Anhänger Peter Ochs. Nach dem Scheitern der Revolution änderten seine Söhne ihren Namen – aus Scham. Und trotzdem hinterliess ihr Vater ein bleibendes Erbe: Es schrieb die erste moderne Verfassung der Schweiz. Mit Gewaltentrennung, Wahlen, Bürgerrecht, Freiheit von Religion und der Presse, Aufhebung der Untertanengebiete und Adelstitel.</p>
      
      <p>Es war die Geburt der modernen Schweiz, mitten im Chaos. Denn die Ideen der „Helvetischen Republik“ überlebten ihr Scheitern. Und zersetzten die Herrschaft der reichen Familien. Diese hatten zuvor mit eiserner Faust regiert – nicht zuletzt durch Justizmorde. So etwa wurde der Pfarrer, Ökonom und Statistiker Heinrich Waser am 27. Mai 1780 hingerichtet. Er hatte in der Schrift „Schweizer Blut und Franz-Geld, politisch gegeneinander abgewogen“ ausgerechnet, in welchem Ausmass die Patrizier sich am Söldnerwesen bereicherten. Das Todesurteil fiel wegen des Paragraphen „Pressevergehen“.</p>
      
      <p>Das Erbe der „Helvetischen Republik“ traten die Republikaner von 1848 an. Es war die einzige erfolgreiche liberale Revolution in Europa. Und sie verwirklichte in der Praxis, was in der Helvetischen Republik nur auf dem Papier stand. In kürzester Zeit wurde ein ganzes Land neu erfunden: Mit einer Verfassung, die Gewaltenteilung, Gleichheit vor dem Gesetz und Wahlen garantierte, mit einem allgemeinen Schulwesen, Universitäten, unabhängigen Gerichten, Pressefreiheit. Dazu wurde eine komplette Infrastruktur aus dem Boden gestampft: die Eisenbahn, die erste Grossbank, der Gotthardtunnel.</p>
      
      <p>Dass wir von Project R unser Magazin „Republik“ nennen, ist ein Bekenntnis zu dieser Tradition. Zum ersten imponiert uns die Tatkraft der Republikaner des 19. Jahrhunderts. Es war ein Jahrhundert des Muts. Man machte überall Pläne. Und legte einfach los. In den Schriften der Liberalen, etwa bei Gottfried Keller, wimmelt es von Worten wie „Projekt“ oder „Labor“. Der Wettstreit der Nationen drehte sich primär um Bauten, Reformen, Erfindungen. Man dachte gross. Fing an. Und blickte nicht zurück.</p>
      
      <p>Zum zweiten hat die Republik seit den Zeiten Roms zwar unendlich viele Ausprägungen erlebt – aber eines haben alle Entwürfe gemeinsam: das Konzept des Gemeinwohls. Ihre politischen Köpfe dachten nicht an Einzelne, an eine Schicht, Nation oder Kaste, sondern an das Ganze. Und dieser Blick scheint uns der richtige in einer Zeit, in der einerseits alles zusammenhängt. Und doch alles zersplittert ist: in Einzelinteressen, in tausend Meinungen und die Flut von noch mehr Nachrichten. Unser Job als junges Medium wird ein sehr traditioneller sein: Nicht die Hektik zu liefern, sondern das grosse Bild, nicht zu jammern, sondern nach Möglichkeiten zu suchen, nicht die Einzelheiten zu beschreiben, sondern die Entwicklungen.</p>
      
      <p>Zum dritten stehen die republikanischen Errungenschaften wieder auf dem Spiel. Zahlreiche Parteien – und in Ungarn, Polen, der Türkei, der USA und vielleicht bald auch Frankreich sogar die Regierungen – verfolgen ein neues Modell: die autoritäre Demokratie. Im Kern besteht das Ziel autoritärer Parteien darin, nach dem Wahlsieg ihre Macht so vollständig wie möglich durchzusetzen. Und Justiz, Presse und Opposition zum Schweigen zu bringen. Mit dem Argument, dass sie als Wahlsieger die Mehrheit des Volkes verkörpern.</p>
      
      <p>Es ist die Wiederkehr der Welt vor der „Helvetischen Republik“ und vor der Revolution von 1848: die Herrschaft von Clans. Das Versprechen, das die Autoritären ihren Wählerinnen und Wählern geben, ist ein doppeltes: Erstens, dass die Mitglieder des Clans profitieren werden und ihre Gegner aus allen Positionen entfernt werden. Und dass – wie unter dem Regime der Patrizier – wieder Herrschaftsgebiete mit Untertanen errichtet werden, in denen unliebsame Gruppen – etwa Frauen oder Ausländer – herumdirigiert werden können.</p>
      
      <p>Das zweite Versprechen der autoritären Parteien ist die pure Ausübung von Macht. Damit sich endlich etwas ändert. Das ist kein kleines Versprechen in einer komplexen Welt, in der auch mächtige Leute gefesselt sind: durch Verträge, die Launen der Märkte, das Netz der Beziehungen. Die autoritären Regime beenden die Phase der Alternativlosigkeit. Und ersetzen sie durch nackte Politik: Nicht Argumente zählen, sondern deren Durchsetzung, nicht Fakten, sondern das Schaffen von Fakten, nicht Komplexität, sondern Härte, nicht die Frage, was das Klügste wäre, sondern die Frage: Bist du mit oder gegen uns?</p>
      
      <p>Auf den ersten Blick wirkt das autoritäre Programm frisch, roh, archaisch. Genauer betrachtet ist es Dekadenz. In ihrer Studie „Warum Nationen scheitern“ untersuchten die Autoren Darin Acemoglu und James A. Robinson in dutzenden Fallbeispielen nach Merkmalen, die florierende und zerfallende Gesellschaften unterscheiden. Die Erkenntnisse waren verblüffend einfach. Um zu prosperieren, braucht eine Gesellschaft nur zwei Dinge: 1. Die Brechung der Macht durch starke Institutionen. Am wichtigsten ist dabei der Schutz vor Willkür durch einen stabilen Rechtsstaat. 2. Die Aufstiegsmöglichkeit von möglichst vielen, diversen Gruppen.</p>
      
      <p>Kurz: Das Programm der Autoritären, das auf Machtkonzentration, Isolation und Ausschluss beruht, ist kein Programm der Erneuerung. Sondern des Niedergangs.</p>
      
      <p>Für den Journalismus ist der Aufstieg der Autoritären ein Problem. Allein schon, weil jede autoritäre Regierung an der Macht als erstes die Pressefreiheit angreift. Aber auch, weil die Rolle des Journalismus als Wachhund der Demokratie in einer in Lager gespaltenen Gesellschaft nur noch schlecht funktioniert. Ein einziger der Skandale von Donald Trump hätte ihn in einer in ihren Grundwerten geeinten Gesellschaft als Politiker erledigt. In einer gespaltenen Gesellschaft werden die Recherchen der Medien jedoch zur Propaganda der Gegenseite. Das verändert die politische Dramaturgie: Im Dutzend verwandelten sich Trumps Skandale in das zentrale Argument für seine Kandidatur. Denn sie bewiesen den Wählerinnen und Wählern seine Macht. Dadurch, dass er sie sich leisten konnte.</p>
      
      <p>Die wichtigste Strategie der autoritären Politiker, um eine Demokratie auszuhebeln, ist Verwirrung. Dass in einer Flut von Behauptungen und Anklagen alles gleichwertig wird. Dass alle Argumente und Fakten nur Meinung sind, dass alle Experten, alle Politikerinnen, alle Journalisten und Wissenschaftlerinnen nur die Meinung ihres Lagers wiedergeben, dass alle lügen, alle bestochen sind, alle Dreck am Stecken haben. Dass also nicht das Nachdenken zählt, nicht das Argument, nicht die Erfahrung, sondern nur die Entscheidung zwischen zwei Clans.</p>
      
      <p>Für den politischen Journalismus bedeutet das, dass er sich Konfusion nicht mehr leisten kann. Schlechte Arbeit bedeutet heute mehr als nur schlechte Arbeit: sie ist Parteinahme für das autoritäre Lager. Gegen die Strategie der Verwirrung hilft nur Klarheit: Nicht die Klarheit einer möglichst schroffen Meinung, sondern die Klarheit beim Zeichnen von Komplexität, Zusammenhängen, Entscheidungen samt ihren Kosten. Dazu braucht es einen kleinen Schuss Mut. Im Privatleben ist das einzige Mittel gegen die Angst, auf sie zuzugehen. Im öffentlichen Leben ist das einzige Mittel zur Verbesserung der Welt ihre Durchschaubarkeit.</p>
      
      <p>Es lohnt sich, dafür zu kämpfen. Die Siege des autoritären Lagers waren bisher immer extrem knapp – wenn auch mit grossen Auswirkungen. Trump gewann in den entscheidenden Staaten gegen Hillary Clinton mit rund einem Prozent Unterschied. Die Masseneinwanderungsinitiative, die die Politik der Schweiz jahrelang lähmte, wurde mit 50,3 Prozent angenommen. Letztere zeigte auch, was kämpfen bewirken kann. Bei der Masseneinwanderungsinitiative, wo wenig gekämpft wurde, reichten den Rechtsnationalen ihre rund 400000 Ja-Stimmen für die knappe Mehrheit. Bei der Durchsetzungsinitiative, wo gekämpft wurde, reichten die rund 400000 Stimmen nirgendwohin. Das rechtsnationale Lager kassierte eine 40:60-Prozent-Niederlage.</p>
      
      <p>Es ist die Zeit gekommen, wo um Selbstverständlichkeiten wie Rechtsstaat, Gleichheit vor dem Gesetz oder Gewaltentrennung gekämpft werden muss. Jahrzehnte waren die republikanischen Institutionen fast langweilig. Weil unbestritten. Das ist nun Vergangenheit. Historisch gesehen ist das keine Überraschung. Denn die Institutionen sind kristallisierter Kampf. Um sie zu errichten haben Generationen von Männern und Frauen – wie etwa Peter Ochs oder Heinrich Wasser – Stellung, Ehre oder sogar den Kopf riskiert. Nun ist die Reihe an unserer Generation.</p>
      
      <p>Lang lebe die Republik!</p>
      
      <p>Herzlichen Dank für Ihre Aufmerksamkeit. Zum Start des Crowdfundings am 26. April hören Sie wieder von uns.</p>

      <p>Ihre Project-R-Crew</p>

      <p>
        <br />
        PS: Die heutige Taufe der Republik in Bern läuft noch bis 17 Uhr. Sie findet im Kulturzentrum Progr an der Speichergasse 4 in Bern statt. Falls Sie in der Nähe sind: alle sind herzlich willkommen!
      </p>

      <p>
        PPS: Sie finden die Republik neu auch auf Facebook: 
      </p> //TODO

      <hr style={{margin: '40px 0'}} />

      <p>Noch nicht für den Newsletter eingetragen? Bleiben Sie informiert:</p>
      <Newsletter />
      <p>Danke!</p>

    </Layout>
  )
}
