import React from 'react'
import Head from 'next/head'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'
import Portrait from '../../src/Portrait'

// the newsletter content should never change
const team = [
 {
    image: 'https://assets.project-r.construction/images/brigitte_meyer.jpg',
    name: 'Brigitte Meyer',
    age: 47,
    title: 'Bildchefin',
    description: `Die zukünftige Bildchefin der «Republik» tat, was kein Mensch vor ihr tat: Sie renovierte 2009 die NZZ. Die letzte nennenswerte Veränderung der «Neuen Zürcher Zeitung» lag damals über 60 Jahre zurück: 1946 hatte man die Frakturschrift abgeschafft. Was viele schon damals nach nur 166 Jahren als überhastet empfanden. Meyer verbrachte ihre Kindheit in Schaffhausen: Dort war nur der Rhein gross. Und alles andere niedlich. Sie verliess die Stadt Richtung Zürich mit einer «Aversion gegen alles Pittoreske». Eigentlich war ihr Plan, an der Uni zu studieren, um Journalistin zu werden. Doch dann bestand sie die Prüfung zur Kunstgewerbeschule. Und landete dann doch im Journalismus, nur anders: als Layouterin beim Magazin «Facts». Danach stieg sie schnell auf, weil sie «kein Problem hatte, Verantwortung zu übernehmen». Das erste Magazin, dass sie komplett neu gestaltete, war das Frauenmagazin «Meyer’s». Als dieses drei Jahre später in Konkurs ging, pendelte sie als Art-Direktorin von 2002 bis 2006 zwischen «Weltwoche» und «Magazin» hin und her. (Sie war dort, wo Roger Köppel nicht war.) Ihre Philosophie bei Bild wie Layout war: Kein Chichi, kein Bullshit, keine Schnörkel. Und vor allem: keine durchgezogene Bildsprache. Sondern das präzise Bild von Fall zu Fall, je nach Text. Und das nicht als Illustration, sondern als Statement. Im Zweifel hält sich Meyer an die Klassik – oder die Idee, die die Klassik in die Luft sprengt: «Ich mag Grenzen und das Ausbrechen aus Grenzen.» Beim Relaunch der NZZ reduzierte sie mit einer Hamburger Agentur das Layout auf das Skelett, entfernte alle Schlacken und baute es wieder auf: ohne Schnörkel, ohne Überflüssiges, nur mit einem winzigen Hauch Exzentrischem. Sie blieb als Bildchefin bis 2017. Bei der NZZ hatte Meyer ein Team von 15 Leuten und 237 Jahre Tradition im Rücken. Bei der «Republik» startet sie nun mit leichtem Gepäck: mit 0 Leuten und 0 Jahren Tradition.`,
    email: ''
  },
    {
    image: 'https://assets.project-r.construction/images/carlos_hanimann.jpg',
    name: 'Carlos Hanimann',
    age: 35,
    title: 'Reporter',
    description: `Sollten Sie Carlos Hanimann kennenlernen, werden Sie beeindruckt sein: von seiner Höflichkeit, seiner Freundlichkeit, seiner guten Laune. Aber Sie haben Pech: Sie werden ihn lesen. Hanimann ist der Mann für Geschichten ohne Happy End, sein Gebiet ist das Zähe, Finstere, Uferlose: Justiz, Steuervermeidungsindustrie, Geheimdienste, Lobbys. Er schrieb etwa über die Profiteure im Asylbusiness, die St. Galler Heroinszene (wofür er den Ostschweizer Medienpreis erhielt) oder über den Versuch einer Todesschwadron aus Bangladesch, in der Schweiz Überwachungstechnik zu kaufen (was sein Artikel dann verhinderte). Dabei begann sein Einstieg in den Beruf denkbar friedlich: Hanimann studierte Zeitgeschichte in Freiburg und entdeckte, dass er als Mitarbeiter im «St. Galler Tagblatt» ohne Anstrengung etwas Geld verdienen konnte. Die Stadt St. Gallen verdankt dieser Erkenntnis gefühlte 10’000 Artikel zu Eröffnungen von Secondhandshops, Nagelstudios und Coiffeursalons. Vor 10 Jahren wechselte Hanimann dann zur «Wochenzeitung» (WOZ). Erst zur Sportseite, dann zu Wirtschaft und Politik – seitdem fehlt seinen Geschichten das Happy End. Hanimanns Höflichkeit drückt sich für seine Leser vor allem indirekt aus: durch Stil. Egal wie finster der Fall ist, er liest sich hell. Denn Hanimann ist einer der wenigen Spürhunde, die auch erzählen können. Er schreibt so elegant, zielbewusst und fettfrei wie eine Strassenkatze. Wer das nachprüfen will, kaufe Hanimanns Buch «Elmer schert aus» über den Whistleblower Rudolf Elmer. Es erschien 2016 im Echtzeit-Verlag.`,
    email: ''
  },
  {
    image: 'https://assets.project-r.construction/images/adrienne_fiechter.jpg',
    name: 'Adrienne Fichter',
    age: 33,
    title: 'Redaktorin',
    description: `Adrienne Fichter kennt Start-ups aus Erfahrung: 2009 war sie bei der Gründung von Politnetz an Bord – und ging drei Jahre durch die faszinierende Hölle von Schlaflosigkeit, Pizzaschachteln und Testen von Ideen. Politnetz.ch war der erste Versuch in der Schweiz, eine digitale Plattform für die demokratische Debatte zu bauen. Und kein schlechter Ort für Fichter, denn ihre Themen waren exakt diese: Politik und Netz. Fichter ist studierte Politologin und Social-Media-Expertin. Von 2014 bis 2017 leitete sie die Social-Media-Abteilung der NZZ: verantwortlich für Konzepte, Debatten, Trolls und Essays zum Thema. Diesen Januar kündigte sie, um als Autorin und Herausgeberin an einem Buch zu arbeiten: «Smartphone-Demokratie» zur Politik im 21. Jahrhundert: zu Fake-News, Bots, Filterblasen, Empörungswellen und den neuesten Strategien der Spin-Doktoren. Es erscheint Mitte September im Verlag NZZ Libro – und diesen Herbst wird Fichter zwecks Vorstellung kreuz und quer durchs Land reisen. Eine Debatte mit ihr lohnt sich. Nicht nur wegen ihrer Kompetenz. Sondern auch, weil Fichters Mutter aus Russland einwanderte. Und ihre Tochter trotz einer Kindheit in Luzern zwei Schweizer Nationaltugenden nie begriffen hat: den Geiz. Und die Zurückhaltung bei der Äusserung der eigenen Ideen.`,
    email: ''
  },
    {
    image: 'https://assets.project-r.construction/images/lukas_buenger.jpg',
    name: 'Lukas Bünger',
    age: 34,
    title: 'Software-Entwickler',
    description: `Das Buch, das Lukas Bünger noch unbedingt lesen will, ist die Abrechnung mit Oberembrach: Dort lebte er als Sohn der Pfarrerin zwischen  den Söhnen von Bauern und Piloten. Und er wünscht sich als Autor die Auferstehung von Robert Musil. Musil ist kein Zufall - beinahe hätte Bünger sein Leben als Germanist verbracht –, aber er floh schnell, als er merkte, dass man in fünf Jahren Studium dort «bestenfalls ein brutaler Fachidiot» werden konnte. Er erholte seinen Kopf ein Jahr lang an der ETH mit Mathematik - und begann mit dem Job, den er sich selber beigebracht hatte: Programmierer. Nach verschiedenen Agenturen heuerte er beim Start-up Watson an: als Entwickler bei dessen Front-End. Ein gutes Interface, so Bünger, «braucht eine heikle Balance: Es macht die Sache einfach. Aber es verkauft die Leute nicht für blöd. Denn das sind sie nicht.» Obwohl Bünger «Journalisten mit Abstand für die narzisstischste Berufsgruppe» hält, gibt er der «Republik» eine Chance. Das, weil ihn reizt, etwas von null auf zu entwickeln. «Die Schweiz hat High-Level-Robotik. Und hervorragende Ingenieure. Aber die Professionalisierung der Web-Entwicklung fängt erst an.»`,
    email: ''
  },
  {
    image: 'https://assets.project-r.construction/images/anja_conzett.jpg',
    name: 'Anja Conzett',
    age: 29,
    title: 'Reporterin',
    description: `Anja Conzett wuchs in Schiers auf, mit Mehl, Bibel und einem vollgestopften Estrich. Sie war die Tochter eines Bäckers und Missionars und als solche von den Bauernkindern geächtet, obwohl sie sie an Wildheit oft übertraf. Sie hielt sich an endlose Stapel von «Spiegel»- und «Geo»-Heften im Estrich. Mit 16 enttäuschte sie ihre Eltern, weil sie ein weltliches Leben plante: Sie wollte Journalismus machen. In Zürich langweilte sie sich fürchterlich im Germanistik-Studium; sie überlegte, was tun. Ein halbes Jahr Indien langweilte sie auch – das taten alle. Sie entschloss sich, einen richtigen Job zu machen: Sie ging zurück nach Graubünden, ins Prättigau, und unterschrieb einen Arbeitsvertrag im Schlachthaus. Sie war die erste Praktikantin, die je dort arbeitete. Die Männer steckten ihr Kuhaugen und Hoden in den Overall. Das als Zeichen der Akzeptanz - sie taten dasselbe auch untereinander. In der Pause wurde über Politik debattiert: Die SVP-Anhänger galten unter den Schlachtern als der linke Flügel. Conzett lernte in diesem halben Jahr mehr als je sonst wo: zurückgeben. Und zuhören. Obwohl sie das Studium wieder aufnahm, blieb das Schlachthaus die beste Universität, die sie je besuchte: Sie gewann ein Ohr für den Slang. Seither kommt sie überall durch, und Milieureportagen sind das, was sie am liebsten macht. Sie schrieb für «Hochparterre», «Südostschweiz» und die «Schweizer Illustrierte» über Dealer, Prostituierte, Fernfahrer, Flüchtlinge und Bauarbeiter. Zu Letzteren erschien 2016 im Rotpunkt-Verlag der Reportageband «Lohndumping - eine Spurensuche auf dem Bau». Sie hat vor, ein furchtloses Leben zu führen.`,
    email: ''
  },
  {
    image: 'https://assets.project-r.construction/images/ariel_hauptmeier.jpg',
    name: 'Ariel Hauptmeier',
    age: 47,
    title: 'Textchef',
    description: `Ariel Hauptmeier ist der geborene Textchef. Sein Job ist, steinige Artikel so lang zu polieren, bis sie die Schärfe eines Diamanten haben. Diese Begabung zeigte sich schon mit 21. Hauptmeier hatte zwar noch nicht die geringste Ahnung, dass er als Textchef geboren wurde. Er hatte eine Kleinstadtjugend in der westdeutschen Provinz hinter sich, als er sich auf einer seiner ersten grossen Reisen an seine Arbeit als Textchef machte: Er beschloss, sich ab sofort Ariel zu nennen.  In den Jahren darauf studierte er Philosophie an der Sorbonne, war Deutschlehrer in Granada, Fotograf bei einer Tageszeitung in San Salvador und betrieb in Berlin den „Blue Room“, eine der vielen heimlichen Kneipen jener Zeit.  1997 schloss er sein Germanistik-Studium ab, strategisch geschickt mit einer Arbeit über Reportagen. Und wurde dann selber Reporter. Er besuchte die Henri-Nannen-Schule in Hamburg, danach  zog er als freier Journalist um die Welt: Nach Japan und Botswana, zu Kokabauern in Kolumbien und Rappern in Rio de Janeiro, er zeltete auf einer Eisscholle vor Ostgrönland und schlich nachts mit jungen Afrikanern zum Grenzzaun von Melilla. Mit 35 wurde er Redakteur bei „Geo“, zweifacher Vater und Hobbyfußballtrainer beim Traditionsclub Altona 93. In dieser Zeit gründete er zusammen mit Cordt Schnibben und Stephan Lebert das Reporter-Forum. Die Grundidee: «Lasst uns über Texte reden.» 2014 wechselte er als Textchef zum neu gegründeten Start-up «Correctiv», spezialisiert auf Investigativ-Journalismus. Und arbeitete im Nebenjob als Schreibcoach und Ausbilder. Damals dachte er, dass die Zeit zum Reisen und Selberschreiben zu Ende sei. Und dass sein Job nun wäre, Jüngeren das Handwerk beizubringen. Er irrte, ein wenig. Dieses Jahr schrieb er zusammen mit einer Kollegin das Buch «Und die Vögel werden singen» – die Autobiografie des syrischen Pianisten Aeham Ahmad, der berühmt wurde, weil er mitten in den Trümmern von Damaskus Mozart spielte. Das Buch erscheint diesen Herbst im Fischer-Verlag. Und er reist wieder. Wenn auch nur nach Zürich.`,
    email: ''
  },
  {
    image: 'https://assets.project-r.construction/images/sylke_gruhnwald.jpg',
    name: 'Sylke Gruhnwald',
    age: 36,
    title: 'Rechercheurin',
    description: `Eigentlich hätte Sylke Gruhnwald lukrativere Möglichkeiten als Journalismus: Sie kennt genug Leute. Sie weiss, wie man es anstellen müsste, Schwarzgeld über diverse Stationen zu verschieben, Schläger in Aserbaidschan anzuheuern, im Nahen Osten zu verschwinden. Mit ihrem Netz aus Informanten von Russland bis ins südliche Afrika und ihrer Kenntnis von Gesetzeslücken könnte sie auch erfolgreich ein Verbrechersyndikat aufbauen. Schon deshalb, weil sie extrem gerne organisiert. Doch die Welt im Schatten macht ihr nur Freude beim Betrachten. Darin zu leben wäre keine Option: «Selbst die, die Geld angehäuft haben, sind unzufrieden. Ich habe keinen Plan B.» Sie wuchs in München auf, studierte in Wien Betriebswirtschaft und chinesische Hochsprache und blieb im Studentenjob beim «Economist» hängen. 2012 kam sie zur NZZ - und baute dort als Chefin von Journalistinnen, Programmierern, Designerinnen das Datenteam auf. Und dazu ein Netzwerk von internationalen Rechercheuren: Sie wurde Mitglied in diversen Recherchierclubs. Und lernte die Journalismusstile (und -gesetze) im Ausland kennen: Am rauesten sind und leben die Kollegen im Osten. («Wir in der Schweiz sind dagegen wirklich nur First-World-Journalisten.») 2014 wechselte sie als Teamleiterin des Datenteams zum Schweizer Fernsehen, 2016 als Reporterin zum «Beobachter». Von ihren zahlreichen, fast immer vielköpfigen Recherchen wurden «The Migrants’ Files» am häufigsten ausgezeichnet: eine Übersicht über alle, die auf der Flucht nach Europa starben.`,
    email: ''
  },
  {
    image: 'https://assets.project-r.construction/images/daniel_pfaender.jpg',
    name: 'Daniel Pfänder',
    age: 42,
    title: 'Software-Entwickler',
    description: `Daniel Pfänder wuchs im Taubertal auf. Dieses liegt in Bayern. Noch heute spricht er den sanften Dialekt seiner Herkunft. Und ihn umgibt ein Hauch von Ruhe und Provinz. Dem es nichts anhaben konnte, dass er zehn Jahre im internationalsten und elitärsten Konzern des Planeten arbeitete: Google. So ruhig Pfänder wirkt, sein Leben bestand aus drei energischen Fluchten. Als Sohn des Dorfschullehrers ging Pfänder aufs Gymnasium. Aber mit 15 hatte er die Schnauze voll «von dem Schweinesystem: den sadistischen Lehrern». Er beschloss, als Einsiedler zu leben. Doch seine Eltern holten ihn mit einem Kompromiss «zurück in die Zivilisation»: statt auszusteigen, Rudolf-Steiner-Schule. Nach dem Abitur war er erst ratlos, weil ihn zu viele Dinge interessierten. Dann studierte er Biologie. Doch eines Tages, im Labor, als er Bakterien mit radioaktivem Mittel markierte, fragte er sich, ob er das ein Leben lang tun wollte: an einer Fussnote der Forschung mitarbeiten. Das war 1995, die Zeit der ersten Webbrowser. Pfänder verliess das Labor und stieg ins Netz um: Es schien ihm das Tor zur Welt. Er bastelte Websites, begann eine Lehre als Mediengestalter bei einer Druckerei, studierte Multimedia und jede Nacht die Jobseite von Google. Eines Nachts erschien das Inserat: Webmaster gesucht. Pfänder schrieb und bestieg vor der ersten Bewerbungsrunde in Zürich das erste Flugzeug seines Lebens. Er hatte Flugangst, kein Wunder, wirkte er nach der Landung souverän: das Schlimmste lag hinter ihm. Nach fünf Monaten Testreihen (einer davon war das Warten) bekam er den Job. Damals arbeiteten bei Google Zürich noch 150 Leute, zehn Jahre später waren es 3000. Und Pfänder fragte sich, ob er nicht schon wieder eine Fussnote war: obwohl er vielleicht die meistgesehenen Fussnoten des Planeten programmiert hatte – die auf den Videos von Youtube. Er fragte sich, ob er nicht - zusammen mit hochintelligenten Technikern - in einer Blase lebte. Er kündigte. Mit der Begründung, dass er «seine Wäsche wieder selbst waschen» wolle. Und heuerte bei der «Republik» an, wo er das muss.`,
    email: ''
  }

]

export default ({url}) => {
  const meta = {
    title: 'Dürfen wir vorstellen? Die Neulinge an Bord der «Republik»',
    description: 'Journalistinnen, Journalisten und Programmierer: Das ist die Start-Aufstellung der Redaktion',
    image: 'https://assets.project-r.construction/images/teamwork2.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout url={url} meta={meta} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Das Team der Republik bei einem Workshop'
      }}
    >
      <h1>Die Start-Aufstellung der «Republik»-Redaktion steht</h1>
      <p>«Wir arbeiten in den nächsten Monaten daran, etwas Brauchbares, Nützliches, Schönes auf die Beine zu stellen. Natürlich werden wir nicht von Anfang an perfekt sein. Und auch später nie. Aber es ist unsere Aufgabe, Ihrem Vertrauen gerecht zu werden.»</p>
    </Cover>
    )}>

    <Head>
      <title>Die Start-Aufstellung der «Republik»-Redaktion steht</title>
    </Head>
    <p>Ladies and Gentlemen,</p>

    <p>entschuldigen Sie, dass wir Sie mitten in den Sommerferien stören. Aber wir haben ein paar Neuigkeiten, die nicht warten können. Oder genauer gesagt: ein paar Neulinge.</p>

    <p>Wir haben Ihnen als Verlegerin, als Verleger beim Crowdfunding versprochen, dass die Redaktion möglichst gemischt sein soll: nach Erfahrungen, Alter, Fähigkeiten – und etwa 50:50 in Sachen Geschlecht. Denn zusammen mit zu viel ähnlichen Leuten hat man keine Chance, den eigenen blinden Flecken zu entkommen. Egal, wie man sich dreht: Je schärfer man hinsieht, desto unsichtbarer wird, was man nicht sieht.</p>

    <p>Unser Plan ist, die eigene Blindheit durch einen möglichst geschickten Mix zu bekämpfen. In der Hoffnung, dass aus vielen Einäugigen ein scharfsichtiges Ganzes entsteht. Kurz: das klassische Konzept jeder Republik.</p>

    <p>Die Einäugigen, die wir in den letzten Wochen an Bord geholt haben, kommen aus den verschiedensten Winkeln. Sie wuchsen in den Bergen, der Stadt oder im Internet auf, arbeiteten in so verschiedenen Unternehmen wie der WOZ, der NZZ oder Google; sie sind teils Rechercheurinnen, teils Stilisten, teils beides, teils Programmierer. (Wir sind ein IT-Unternehmen.)</p>

    <p>Falls Sie noch Qualitäten vermissen: Das ist nur die erste Welle der Einstellungen. Nicht zuletzt ist der Job der Neulinge, bis Ende Herbst die gesamte Redaktion aufzubauen. Weitere Einäugige werden also folgen.</p>

    <p>An Bord sind, in zufälliger Reihenfolge:</p>

    {team.map((person, i) => <Portrait key={i} {...person} odd={!(i % 2)} />)}

    <p>So weit die ersten Zuzüge der Redaktion. Wahrscheinlich werden sie genau das tun, was jede Redaktion für ihre Verlegerin, ihren Verleger tut: Sie erstaunen. Mal, weil sie verblüffend Interessantes produzieren. Mal, weil man sich so furchtbar über die Bande ärgert.</p>

    <p>Aber bis dahin ist noch ein wenig Zeit. Es sind ja nun noch fünf Monate bis zum Start der «Republik». Entschuldigen Sie die Störung Ihrer Sommerferien.</p>

    <p>Und erholen Sie sich gut!</p>

    <p>Mit besten Grüssen an Ihre Strände, Berge und Balkone –</p>

    <p>die Crew von Project R und der «Republik»</p>

    <p>PS: Falls Sie noch nicht als Verleger, als Verlegerin der «Republik» an Bord sind – unsere Büros sind nach einer kurzen Pause wieder geöffnet. Und wir heissen Sie hier willkommen:<a href="https://www.republik.ch"> www.republik.ch</a></p>

    <p>PPS: In den nächsten zwei Wochen werden wir Sie noch einmal stören müssen. Es geht um die Veröffentlichung des Codes der Crowdfunding-Website. Damit diese auch von Unternehmen gebraucht werden kann, die Ähnliches vorhaben. (Wir versprachen Ende April, das wir das tun würden. Und müssen nun Hannah Arendt folgen, die einmal schrieb: «Es gibt nur eine einzige brauchbare Methode, die Zukunft vorherzusagen: Gib ein Versprechen und halte es.»)</p>

  </Layout>
  )
}
