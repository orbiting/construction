import React from 'react'
import Head from 'next/head'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'
import Portrait from '../../src/Portrait'

// we could import from src, but the newsletter content should never change
const team = [
  {
    image: 'https://assets.project-r.construction/images/susanne_sugimoto.jpg',
    name: 'Susanne Sugimoto',
    age: 53,
    title: 'Geschäftsführung',
    description: `Susanne Sugimoto kennt KMUs, Politik, Gewerkschaften und Grosskonzerne von innen. Sie machte eine Lehre als Drogistin (nur einen Steinwurf vom Rothaus entfernt). Danach holte sie die Matura nach und machte ein Studium der Geographie und Wirtschaftsinformatik. (Das erste Kind kam am letzten Tag des ersten Semesters, das zweite am ersten Tag des letzten.) Kurz darauf sass sie im Zürcher Gemeinderat und wurde Zentralsekretärin beim Schweizerischen Kaufmännischen Verband, wo sie unter anderem nach dem Grounding der Swissair das Bodenpersonal vertrat. Dann wechselte sie aus Neugier auf die Seite, mit der sie zuvor zehn Jahre über Löhne verhandelt hatte: zu den Konzernen. Sie wurde Leiterin der Medienstelle bei Coop. Und fünf Jahre später Leiterin des Kommunikationsteams für Zentraleuropa beim Zementmulti Holcim. Heute führt sie eine selbstständige Beraterfirma. Als Geschäftsführerin bei Project R ist ihr Job der Überblick über Budget, Personal, Tagesgeschäft. Kurz: Die Aufgabe der meisten Teammitglieder von Project R ist der Aufbau von Komplexität. Ihre die Reduktion von Komplexität.`,
    email: 'susanne.sugimoto@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/laurent_burst.jpg',
    name: 'Laurent Burst',
    age: 37,
    title: 'Strategie',
    description: `Laurent Burst begann seine Geschäftstätigkeit mit 13 bei seinem Eintritt ins Gymnasium, mit Produktion, Druck und Inserateakquise bei einer Schülerzeitung, programmierte mit 14 in den Ferien professionelle Datenbanken, besass mit 15 das erste Natel der Schule, arbeitete mit 16 als Reporter für die «Zuger Presse», war mit 17 Kommunikationschef der Firma Brainstore, mit 21 Verwaltungsrat, mit 23 übernahm er die Geschäftsleitung. Mit 28 wechselte er – nach 10 Jahren Managementmenterfahrung – zur Verpackungsfirma Stewo, erst als Produktemanager, dann als Mitglied der Geschäftsleitung (das jüngste aller Zeiten, das erste mit Teilzeitpensum), bekam mit 30 zu Weihnachten das Buch «Annie Leibowitz at Work» geschenkt, verbrachte eine schlaflose Nacht, kündigte in der Silvesternacht und begann mit dem Beruf seines Vaters: Fotograf. Er fotografierte für Publikationen wie GQ oder das «Wall Street Journal», reiste im Jahr drei Mal um den Erdball, vermisste das Teamwork – und baut seit 2014 ein Startup auf: «Herr Rizzi», eine Importfirma für exotische Getränke aus der ganzen Welt. Bei Project R ist er für die Konstruktion von Businessplan und Rechtsform zuständig – und für die höflichste Art, die härtesten Fragen zu stellen. (Fragen sind die Spezialität von Burst, dessen Chef einst bei einem Mittagessen eine Ladung Zahnstocher in sein Hemd steckte, und verkündete: Bei jeder Frage von Burst werde er einen Zahnstocher herausnehmen, und nach dem letzten Zahnstocher sei für den Rest des Tages Ruhe.) Bei Project R haben wir leider keine Zahnstocher: Burst hat vor, das Projekt im Verwaltungsrat derart hart mit Fragen zu löchern, dass es auch noch in 20 Jahren ausbaufähig bleibt.`,
    email: 'laurent.burst@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/nadja_schnetzler.jpg',
    name: 'Nadja Schnetzler',
    age: 44,
    title: 'Prozesse und Zusammenarbeit',
    description: `Nadja Schnetzler begann bei einer Schülerzeitung, aus der noch vor der Matura ein Business wurde: die Vermittlung von Inseraten für Schülerzeitungen. Später, in der Ringier-Journalistenschule, machte sie Praktika bei so unterschiedlichen Medien wie «Bild» und «taz». Doch entscheidender war ein Tag im Frühling 1997: Als Schnetzler mit ihrem späteren Mann entschied, während der Herbstferien in einem Ladenlokal in Biel ein neuartiges Geschäft aufzumachen: einen Ideenhandel namens Brainstore. Die ersten Produkte waren noch unschlagbar günstig – für 9 Franken 90 erhielten Passanten gleich drei Ideen. (Eine typische Frage war etwa, wie man den pensionierten Ehemann dazu bringt, wieder ausser Haus zu gehen.) Zur Verblüffung aller entwickelte sich daraus eine international tätige Firma: Auf dem Höhepunkt beschäftige Brainstore 80 Mitarbeiter und 3000 Freelancer – und entwickelte Ideen für Unternehmen, NGOs, Privatleute und Regierungen auf sämtlichen Kontinenten, mit Ausnahme der Antarktis. (Mehr zu Theorie und Praxis der industriellen Ideenproduktion finden Sie in Schnetzlers Buch «Die Ideenmaschine».) 2012 machte sich Nadja Schnetzler als Kollaborations-Coach mit «Word and Deed» selbstständig. Bei Project R ist ihr Mandat die Entwicklung und Zusammenarbeit: Wie macht man etwas besser? Wie einfacher? Und wie kann man etwas neu denken?`,
    email: 'nadja.schnetzler@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/clara_vuillemin.jpg',
    name: 'Clara Vuillemin',
    age: 24,
    title: 'Head of IT',
    description: `Clara Vuillemin studierte Maschinenbau und Elektrotechnik in Lausanne und Moskau. Daneben arbeitete sie in zahlreichen Jobs: auf dem Bauernhof, bei NGOs in New York, Perm (im Ural) und Kasachstan, war Reporterin bei der «Moskauer Deutschen Zeitung», App-Programmiererin in Winterthur, IT-Verantwortliche im Rotpunktverlag Zürich, Politikerin bei den Jungen Grünen, und gab – ihr bisheriger Lieblingsjob – in Lausanne Physik für Ingenieursstudenten: Mechanik, Elektrotechnik, Quantentheorie. Sie spricht schnell, denkt noch schneller. Einer ihrer Lieblingssätze ist: «Let’s get this shit done!» Wenn Vuillemin etwas nicht versteht, hat nicht sie ein Problem, sondern der, der Unverständliches gesagt hat. Ihr Job bei Project R ist der Aufbau einer IT-Architektur: Open Source, brauchbar auch für andere Medien und Entwickler, anpassbar an Entwicklung und Ideen der Redaktion: «Ich will, dass es schön ist. Ich will, dass es schnell ist. Ich will, dass es sicher ist.»`,
    email: 'clara.vuillemin@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/patrick_recher.jpg',
    name: 'Patrick Recher',
    age: 28,
    title: 'Software-Entwicklung',
    description: `Patrick Recher, der Mann für die Datenbanken, machte seine Informatiker-Lehre bei der Swisscom, wo jeder Lehrling ein Generalabonnement in die Hand gedrückt bekam und die Möglichkeit, sich irgendwo im Unternehmen zu bewerben. Was ihn faszinierte, waren Netzwerke: Er hatte schon mit 12 die Nachbarhäuser verkabelt. Was ihn weniger faszinierte war das Informatikstudium danach: lauter veraltete Software. («Für Informatiker gehört es zum guten Ton, dass du das Studium abbrichst.») Er wurde trotzdem zwei Mal Schweizer Vizemeister in Informatik. Und erhielt eine Goldmedaille (leider keinen Barren) von der Nationalbank für seine Lehrabschlussarbeit zur Finanzkrise. Seinen grössten Coup landete er mit seiner Maturarbeit: Für das erste iPhone entwickelte er eine App, die ein beliebiges Landschaftsfoto mit Orts-, Fluss- und Bergnamen beschriftete. Recher schlug damit die Entwickler aus der ETH, die mit einem ähnlichen Vorhaben gescheitert waren. Und hatte noch vor dem Abschluss einen Job als App-Entwickler. Bei Project R ist seine Verantwortung, die Programme für alles Verborgene zu entwickeln: Artikelverwaltung, Userverwaltung, Zahlungsabwicklung – «immer mit einem innovativen Twist.»`,
    email: 'patrick.recher@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/thomas_preusse.jpg',
    name: 'Thomas Preusse',
    age: 25,
    title: 'Software-Entwicklung',
    description: `Thomas Preusse schaffte es, als Programmierer in Rekordzeit zwei Journalistenpreise zu gewinnen – obwohl er «lieber 100 Zeilen Code schreibt als einen einzigen Satz». 2016 gewann er (mit Markus Häfliger) den Zürcher Journalistenpreis für die Aufdeckung der Kasachstan-Affäre, welche die damalige Nationalratspräsidentin Christa Markwalder in Bedrängnis brachte. Preusse hatte die Suchmaschine gebaut, mit der ein Datenleck der kasachischen Regierung durchforstet werden konnte. Im Jahr zuvor hatte er mit einem NZZ-Team den deutschen Reporterpreis für die beste Web-Reportage erhalten: eine Rekonstruktion des Flugs MH370, der spurlos über dem Indischen Ozean verschwand. Seine Laufbahn begann Preusse als Webdesigner bei einer Werbeagentur in Kanada, zuletzt arbeitete er bei der Web-Agentur «Interactive Things» in Zürich. Preusses Hauptjob bei Project R ist der Aufbau des sogenannten Frontends: einem Interface, das für die Leser und Redaktion so vollkommen unauffällig funktionieren soll wie in einem englischen Schloss der Butler.`,
    email: 'thomas.preusse@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/constantin_seibt.jpg',
    name: 'Constantin Seibt',
    age: 50,
    title: 'Konzeption und Redaktion',
    description: `Constantin Seibt war ein Kind, das Abenteurromane las. Und den Plan fasste, eines Tages dasselbe zu machen: Nicht Abenteuer zu erleben. Aber Abenteuerromane zu schreiben. Mit 22 kam er seinem Ziel am nächsten: Er schrieb mit einem Kollegen einen Krimi. Die Folge waren Aufträge von Zeitungen. Seibt blieb im Journalismus, erst bei der Zürcher Studierendenzeitung «ZS», später bei der Wochenzeitung «WoZ» und schliesslich beim «Tages-Anzeiger». Sein Spezialgebiet wurde die Grauzone zwischen Politik und Wirtschaft: von der Finanzkrise bis zur Eurokrise. Für seine Reportagenserie zum Swissair-Prozess erhielt er 2008 den Zürcher Journalistenpreis. Seibt ist einer der wenigen Reporter, die nicht nur eine Praxis, sondern auch eine Theorie haben: 2015 erschien sein Buch «Deadline» über das Handwerk des Schreibens. Die Bilanz ist also, dass Seibt sein Ziel um 180 Grad verfehlt hat: Der Beruf als Reporter verwandelte zwar sein Berufsleben in eine Kette von kleinen Abenteuern. Doch der Abenteuerroman blieb ungeschrieben. Project R soll dafür sorgen, dass es dabei bleibt.`,
    email: 'constantin.seibt@project-r.construction'
  },
  {
    image: 'https://assets.project-r.construction/images/christof_moser.jpg',
    name: 'Christof Moser',
    age: 37,
    title: 'Konzeption und Redaktion',
    description: `Christof Moser wollte Journalist werden, noch bevor er bis Z buchstabieren konnte – und nachdem sich herausgestellt hatte, dass Regenwaldforscher wegen Arachnophobie keine gute Berufswahl gewesen wäre. Also lancierte er mit 12 seine erste Schülerzeitung, die sich bis zum Ende der Schulzeit in ein Magazin («Nachtisch») weiter entwickelte und dann noch weiter – bis zum mittelgrossen Konkurs. Die Publikation fiel auf einen Betrüger herein. Und Moser zahlte bis 25 Druckereirechnungen ab. Nach einer kaufmännischen Ausbildung stieg Moser als Volontär beim «Brückenbauer» (dem heutigen «Migros-Magazin») in den Journalismus ein. Im Jahr 2000 gehörte er beim Wirtschaftsportal «Moneycab» zu den ersten Onlinejournalisten der Schweiz, danach folgten Stationen als Politik-Reporter bei «Facts», «Weltwoche» und «SonntagsBlick» und eine abgebrochene TV-Stage bei «10vor10». Zuletzt arbeitete er als Bundeshaus-Journalist und Medienkritiker bei der «Schweiz am Sonntag» und als freier Autor für «Literarischer Monat», «Surprise», «Zeit Schweiz» und «Schweizer Illustrierte». Daneben baute er «Infosperber» mit auf und unterrichtet Journalismus-Studentinnen und -Studenten in Politik- und Wirtschaftsjournalismus, Storytelling und Medienethik. Bei Project R kann Moser ein bisher verborgenes Talent ausleben: das Zeichnen von Plänen. Denn davon braucht ein Medienprojekt Unmengen.`,
    email: 'christof.moser@project-r.construction'
  }
]

export default () => {
  return (
    <Layout cover={(
      <Cover image={{
        src: 'https://assets.project-r.construction/images/project_r_crew.jpg',
        alt: 'Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 201'
      }} />
    )}>
      <Head>
        <title>Ladies and Gentlemen, hier ist er, der erste Newsletter von Project R.</title>
      </Head>
      <p>Ladies and Gentlemen,</p>

      <p>hier ist er, der erste Newsletter von Project R.</p>

      <p>Dieser Newsletter ist für Sie etwas wert. Und zwar ein oder zwei Biere (aus Norwegen) oder, falls Sie weniger Hartes vorziehen, ein oder zwei Schorle (aus Rhabarber). Dies unter der Bedingung, dass Sie heute Dienstagabend, 10. Januar 2017, zwischen 18:30 Uhr und Mitternacht in Zürich sind.</p>

      <p>Wir wollen nämlich mit Ihnen anstossen, bei einer kleinen, spontanen Party. (Nichts Wildes. Nur Anstossen.) Und zwar aus drei Gründen.</p>

      <p>Der erste Grund ist, dass heute (mit vier Tagen Verspätung auf den Rest der Welt) die traditionelle Dreikönigstagung der Schweizer Presse stattfindet. Es ist das Treffen der wichtigsten Verlagskader, und bedeutende Persönlichkeiten wie Verlegerpräsident Pietro Supino oder UBS-Marketingchef Johan Jervøe werden bedeutende Reden halten.</p>

      <p>Wir dachten, wenn die Könige der Branche sich im World-Trade-Center versammeln, dann ist es keine schlechte Idee, dass auch das Wickelkind der Schweizer Presse am Abend zu einem kleinen Fest einlädt.</p>

      <p>Und zwar - das ist unser zweiter Grund, Sie einzuladen - an unserem brandneuen Geschäftssitz.</p>

      <img src='https://assets.project-r.construction/images/rothaus.jpg' />

      <p>Wir haben unsere Büros fürs erste im Hotel Rothaus eingerichtet, mitten im Zürcher Kreis 4 an der Langstrasse, genauer: an der Sihlhallenstrasse 1. Das Rothaus war viele Jahre das Winterquartier für die Artisten des Zirkus Knie, später ein Stundenhotel – keine schlechte Umgebung für publizistische Pläne.</p>

      <p>Unser Job dort wird sein, eine Zukunft für den Journalismus abseits der grossen Verlage zu bauen. Denn die traditionellen Verlagshäuser verlassen die Publizistik. Sie investieren zwar noch Reden in ihr altes Geschäftsmodell, aber das Geld und die Ideen fliessen in den Aufbau von Internet-Handelshäusern. Das ist ökonomisch vernünftig, aber schlimm für die Demokratie. Denn mit schlechten Informationen fallen schlechte Entscheidungen.</p>

      <p>Unsere Aufgabe ist es, ein digitales Magazin für den Journalismus des 21. Jahrhunderts zu entwickeln: einen Salon für Debatten und ungelöste Fragen, smart, politisch, fair – und mitreissend genug, dass die Artikel freiwillig gelesen werden. Das wäre eigentlich Abenteuer genug. Zusätzlich haben wir aber auch noch die Aufgabe, ein Geschäftsmodell dafür zu entwickeln: ein Medium, das schlagkräftig genug ist, um im öffentlichen Diskurs einen Unterschied zu machen. Und schlank genug, um zu überleben.</p>

      <p>Wir versuchen dabei einen Fehler zu vermeiden, den einige bisherige Projekte gemacht haben: nur auf publizistischen Glanz zu vertrauen und das Geschäftliche ausser Acht zu lassen. Wir müssen eine funktionierende Firma bauen.</p>

      <p>Deshalb freuen wir uns, Ihnen heute Abend – das ist der dritte, letzte und wichtigste Grund für die Einladung – die Leute vorzustellen, die bei Project R für Organisation, Geschäft und Informatik zuständig sind. Bisher war in den Medien erst von unseren journalistischen Köpfen Christof Moser und Constantin Seibt zu lesen – und von allen anderen noch kein Wort. Dabei sind wir bereits zu acht.</p>

      <p>Hier also das Aufbauteam, das heute Abend mit Ihnen trinken wird:</p>

      {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}

      <p>Soweit also das Aufbauteam, das mit Ihnen Bier oder Schorle trinkt.</p>

      <p>Wer noch dazustösst, wird die Zukunft zeigen. In den letzten Monaten haben wir mit ein paar Dutzend der interessantesten Journalistinnen und Journalisten, Anwälte, Informatikern, Campaignern gesprochen. Ab dem Sommer werden wir die Redaktion zusammenstellen können.</p>

      <p>Davor liegt noch eine Furcht erregende Hürde. Ende des Frühlings werden wir ein Ereignis überstehen müssen, das über Leben und Tod des Projekts entscheidet: ein Crowdfunding.</p>

      <p>Dies aus folgendem Grund: Der Journalismus ist nicht zufällig weltweit in der Krise. Mit dem Internet brach das traditionelle Geschäftsmodell zusammen: Man verkaufte die Zeitungen an die Leser und die Leser an die Werbung. Viele Jahrzehnte hatten die Journalisten geglaubt, sie verdienten ihr Geld wegen ihrer Brillanz auf der Kanzel - nun stellte sich heraus, dass die Kanzel aus Kleinanzeigen gebaut war. Die verschwanden im Netz und die Kanzel mit ihnen.</p>

      <p>Wir haben vor dem Start von Project R fast drei Jahre über ein Modell nachgedacht, wie kompetenter, kanzelfreier Journalismus gemacht werden könnte. Wir erstellten Dutzende Konzeptpapiere und Budgets - und versuchten, möglichst vorsichtig zu planen. Doch eine Unbekannte blieb in allen Papieren dieselbe: der Markt. Wir sind nun zwar überzeugt von unserem Konzept – aber es lässt sich nicht vorhersagen, wie viele Leser für ein neues Produkt zahlen werden. Journalismus ist ein Hochrisikogeschäft.</p>

      <p>Als wir auf Finanzsuche gingen, schien es uns deshalb keine gute Idee, Investoren und Mäzene ihr Geld in ein Projekt stecken zu lassen, dessen Erfolg ungewiss ist. Wir beschlossen, dass es eine simple Frage der Fairness ist, dass wir zuerst ins Risiko gehen. Und, bevor wir viel Geld ausgeben, einen echten Markttest machen: ein Crowdfunding, an dessen Erfolg alle Finanzzusagen von Investoren und Mäzenen gebunden sind.</p>

      <p>Klar ist, dass dieses Crowdfunding nicht einfach werden wird – es muss eines der grössten werden, das die Schweiz je gesehen hat. Klappt es, ist die Anschubfinanzierung sichergestellt. Verlieren wir es, ist das Projekt anfangs Sommer tot. Und wir müssen entehrt das Land verlassen.</p>

      <p>Das ist nichts, wobei man ruhig schläft. Aber wir glauben, dass es sinnlos ist, ein Medium zu starten, wenn die Leute es nicht wollen.</p>

      <p>Kurz: Wir werden Sie und Ihre Unterstützung brauchen. Und ja, es war übertrieben, weiter oben von uns als Wickelkind der Schweizer Presse zu reden. Präzis gesagt, handelt es sich bei uns eher um einen Embryo, der noch nicht weiss, ob er die Geburt überlebt.</p>

      <p>Bis zum Sommer können wir also für nichts garantieren. Aber es würde uns freuen, wenn Sie trotzdem vorbeikommen. (Nur: Erwarten Sie nichts Grosses: Keine Reden, keine Band, nur drei Büroräume, Gespräche und ein Getränk.) Dafür haben Sie die Gelegenheit, die sonst nur Zwillinge ab dem siebten Monat haben: einem Embryo die Hand zu schütteln.</p>

      <p>
        Wir freuen uns auf Sie!<br />
        Ihre R-Crew
      </p>

      <p>
        <a href='https://www.facebook.com/Project-R-1283717661652978'>Facebook</a>{' – '}
        <a href='https://twitter.com/_Project_R'>Twitter</a>{' – '}
        <a href='https://project-r.construction/media.html'>Medieninformation</a>
      </p>

      <h2>Project R</h2>
      <p>
        c/o Hotel Rothaus<br />
        Sihlhallenstrasse 1<br />
        CH-8004 Zürich
      </p>
      <img style={{maxWidth: 50}} src='https://assets.project-r.construction/images/project_r_logo.svg' />

      <p>
        Spendenkonto:<br />
        Verein für unabhängigen Journalismus<br />
        Hegifeldstrasse 57<br />
        8404 Winterthur<br />
        Raiffeisenbank Winterthur<br />
        IBAN: CH12 8148 5000 0082 2840 1
      </p>

    </Layout>
  )
}
