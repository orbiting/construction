import React from 'react'

import Layout from '../src/Layout'
import Newsletter from '../src/Newsletter'

export default () => {
  const meta = {
    title: 'Project R geht an den Start',
    description: 'Das Medienprojekt stellt seine Aufbau-Crew vor – und zieht ins Hotel Rothaus in Zürich',
    image: 'https://assets.project-r.construction/images/balkon.jpg',
    url: 'https://project-r.construction/'
  }

  return (
    <Layout meta={meta}>

      <style jsx global>{`
.Container {
  margin: 0 auto;
  padding: 20px;
  padding-top: 10px;
  max-width: 640px;
}
@media (min-width: 600px) {
  .Container {
    padding-top: 20px;
  }
}
.Cover {
  width: 100%;
  position: relative;
}
.Cover-image {
  display: block;
}
@media (min-width: 1200px) {
  .Cover {
    min-height: 500px;
    height: 700px;
    height: 80vh;
    background-image: url('https://assets.project-r.construction/images/project_r_crew.jpg');
    background-size: cover;
    background-position: 0 center;
  }
  .Cover-image {
    display: none;
  }
}
.Lead-center {
  padding: 20px 20px 0;
}
.Lead p {
  font-weight: bold;
}
.Lead p:last-child {
  margin: 0;
}
@media (min-width: 600px) {
  .Lead {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    color: #fff;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.80) 100%);
  }
  .Lead-content {
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
  }
  .Lead-center {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
  }
}
.Portrait {
  margin: 0 0 15px;
}
.Portrait h2 {
  font-size: 24px;
}
.Portrait p {
  margin-bottom: 0.2em;
}
.Portrait p:last-child {
  margin-bottom: 0.8em;
}
.Portrait:after {
  content: "";
  display: table;
  clear: both;
}
@media (min-width: 600px) {
  .Portrait:nth-child(even):not(.Portrait-left) .Portrait-image {
    float: right;
    width: 50%;
    margin-top: 3px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .Portrait:nth-child(odd) .Portrait-image, .Portrait.Portrait-left .Portrait-image {
    float: left;
    width: 50%;
    margin-top: 3px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
input {
  width: 211px;
  margin-right: 6px
}
button {
  width: 110px
}
button:hover, input[type="submit"] {
  background: #444444;
  color: white;
}
button,
input {
  vertical-align: bottom;
  color: #444444;
  padding: 10px 20px 10px 20px;
  border: solid #444444 1px;
  text-decoration: none;
  background-color: white;
  font-size: 14px;
  height: 37px;
}`}</style>

      <div className="Cover">
        <img className="Cover-image" src="https://assets.project-r.construction/images/project_r_crew.jpg" alt="Das Project R Team in der Lobby des Hotel Rothaus am 5. Januar 2017" />
        <div className="Lead">
          <div className="Lead-content">
            <div className="Lead-center">
              <h1>Project R geht an den Start</h1>
              <p>«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam, oder gar nicht.»</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Container">

        <p>Ladies and Gentlemen,</p>

        <p>Thomas Jefferson, der Autor der amerikanischen Unabhängigkeits­erklärung, schrieb einmal:</p>

        <blockquote>«Ich bin sicher, eine kleine Rebellion hier und da ist eine gute Sache; sie ist in der Politik so notwendig, um die Dinge zu klären, wie ein Sturm für das Wetter.»</blockquote>

        <p>Wir glauben, dass auch im Journalismus die Zeit für eine kleine Rebellion gekommen ist. Und arbeiten daran, sie zu machen.</p>

        <p>Dafür haben wir uns fürs erste im legendären Hotel Rothaus einquartiert, mitten im Zürcher Kreis 4 an der Langstrasse, genauer: an der Sihlhallenstrasse 1. Das Rothaus war viele Jahre das Winterquartier für die Artisten des Zirkus Knie, später ein Stundenhotel – keine schlechte Umgebung für publizistische Pläne.</p>

        <img src="https://assets.project-r.construction/images/rothaus.jpg" />

        <p>Unser Job dort wird sein, eine Zukunft für den Journalismus abseits der grossen Verlage zu bauen. Denn die traditionellen Verlagshäuser verlassen die Publizistik. Sie investieren zwar noch Reden in ihr altes Geschäftsmodell, aber das Geld und die Ideen fliessen in den Aufbau von Internet-Handelshäusern. Das ist ökonomisch vernünftig, aber schlimm für die Demokratie. Denn mit schlechten Informationen fallen schlechte Entscheidungen.</p>

        <p>Unsere Aufgabe ist es, ein digitales Magazin für den Journalismus des 21. Jahrhunderts zu entwickeln: einen Salon für Debatten und ungelöste Fragen, smart, politisch, fair – und mitreissend genug, dass die Artikel freiwillig gelesen werden. Das wäre eigentlich Abenteuer genug. Zusätzlich haben wir aber auch die Aufgabe, ein Geschäftsmodell dafür zu entwickeln: ein Medium, das schlagkräftig genug ist, um im öffentlichen Diskurs einen Unterschied zu machen. Und schlank genug, um zu überleben.</p>

        <p>Seit Monaten arbeitet die Project R-Aufbau-Crew, gemeinsam mit zahlreichen Komplizinnen und Komplizen im Hintergrund, an der Gesellschaftsform, dem Aufbau der Crowdfunding-Plattform, der IT-Entwicklung und dem Redaktionskonzept.</p>

        <p>Zur Aufbau-Crew gehören:</p>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/susanne_sugimoto.jpg" alt="" />
          <h2>Susanne Sugimoto,&nbsp;53</h2>
          <h3>Geschäftsführung</h3>
          <p>Susanne Sugimoto kennt KMUs, Politik, Gewerkschaften und Grosskonzerne von innen. Sie machte eine Lehre als Drogistin (nur einen Steinwurf vom Rothaus entfernt). Danach holte sie die Matura nach und machte ein Studium der Geographie und Wirtschaftsinformatik. (Das erste Kind kam am letzten Tag des ersten Semesters, das zweite am ersten Tag des letzten.) Kurz darauf sass sie im Zürcher Gemeinderat und wurde Zentralsekretärin beim Schweizerischen Kaufmännischen Verband, wo sie unter anderem nach dem Grounding der Swissair das Bodenpersonal vertrat. Dann wechselte sie aus Neugier auf die Seite, mit der sie zuvor zehn Jahre über Löhne verhandelt hatte: zu den Konzernen. Sie wurde Leiterin der Medienstelle bei Coop. Und fünf Jahre später Leiterin des Kommunikationsteams für Zentraleuropa beim Zementmulti Holcim. Heute führt sie eine selbstständige Beraterfirma. Als Geschäftsführerin bei Project R ist ihr Job der Überblick über Budget, Personal, Tagesgeschäft. Kurz: Die Aufgabe der meisten Teammitglieder von Project R ist der Aufbau von Komplexität. Ihre die Reduktion von Komplexität.</p>
          <p><a href="mailto:susanne.sugimoto@project-r.construction">susanne.sugimoto@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/laurent_burst.jpg" alt="" />
          <h2>Laurent Burst,&nbsp;37</h2>
          <h3>Strategie</h3>
          <p>Laurent Burst begann seine Geschäftstätigkeit mit 13 bei seinem Eintritt ins Gymnasium, mit Produktion, Druck und Inserateakquise bei einer Schülerzeitung, programmierte mit 14 in den Ferien professionelle Datenbanken, besass mit 15 das erste Natel der Schule, arbeitete mit 16 als Reporter für die «Zuger Presse», war mit 17 Kommunikationschef der Firma Brainstore, mit 21 Verwaltungsrat, mit 23 übernahm er die Geschäftsleitung. Mit 28 wechselte er – nach 10 Jahren Managementmenterfahrung – zur Verpackungsfirma Stewo, erst als Produktemanager, dann als Mitglied der Geschäftsleitung (das jüngste aller Zeiten, das erste mit Teilzeitpensum), bekam mit 30 zu Weihnachten das Buch «Annie Leibowitz at Work» geschenkt, verbrachte eine schlaflose Nacht, kündigte in der Silvesternacht und begann mit dem Beruf seines Vaters: Fotograf. Er fotografierte für Publikationen wie GQ oder das «Wall Street Journal», reiste im Jahr drei Mal um den Erdball, vermisste das Teamwork – und baut seit 2014 ein Startup auf: «Herr Rizzi», eine Importfirma für exotische Getränke aus der ganzen Welt. Bei Project R ist er für die Konstruktion von Businessplan und Rechtsform zuständig – und für die höflichste Art, die härtesten Fragen zu stellen. (Fragen sind die Spezialität von Burst, dessen Chef einst bei einem Mittagessen eine Ladung Zahnstocher in sein Hemd steckte, und verkündete: Bei jeder Frage von Burst werde er einen Zahnstocher herausnehmen, und nach dem letzten Zahnstocher sei für den Rest des Tages Ruhe.) Bei Project R haben wir leider keine Zahnstocher: Burst hat vor, das Projekt im Verwaltungsrat derart hart mit Fragen zu löchern, dass es auch noch in 20 Jahren ausbaufähig bleibt.</p>
          <p><a href="mailto:laurent.burst@project-r.construction">laurent.burst@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/nadja_schnetzler.jpg" alt="" />
          <h2>Nadja Schnetzler,&nbsp;44</h2>
          <h3>Prozesse und Zusammenarbeit</h3>
          <p>Nadja Schnetzler begann bei einer Schülerzeitung, aus der noch vor der Matura ein Business wurde: die Vermittlung von Inseraten für Schülerzeitungen. Später, in der Ringier-Journalistenschule, machte sie Praktika bei so unterschiedlichen Medien wie «Bild» und «taz». Doch entscheidender war ein Tag im Frühling 1997: Als Schnetzler mit ihrem späteren Mann entschied, während der Herbstferien in einem Ladenlokal in Biel ein neuartiges Geschäft aufzumachen: einen Ideenhandel namens Brainstore. Die ersten Produkte waren noch unschlagbar günstig – für 9 Franken 90 erhielten Passanten gleich drei Ideen. (Eine typische Frage war etwa, wie man den pensionierten Ehemann dazu bringt, wieder ausser Haus zu gehen.) Zur Verblüffung aller entwickelte sich daraus eine international tätige Firma: Auf dem Höhepunkt beschäftige Brainstore 80 Mitarbeiter und 3000 Freelancer – und entwickelte Ideen für Unternehmen, NGOs, Privatleute und Regierungen auf sämtlichen Kontinenten, mit Ausnahme der Antarktis. (Mehr zu Theorie und Praxis der industriellen Ideenproduktion finden Sie in Schnetzlers Buch «Die Ideenmaschine».) 2012 machte sich Nadja Schnetzler als Kollaborations-Coach mit «Word and Deed» selbstständig. Bei Project R ist ihr Mandat die Entwicklung und Zusammenarbeit: Wie macht man etwas besser? Wie einfacher? Und wie kann man etwas neu denken?</p>
          <p><a href="mailto:nadja.schnetzler@project-r.construction">nadja.schnetzler@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/clara_vuillemin.jpg" alt="" />
          <h2>Clara Vuillemin,&nbsp;24</h2>
          <h3>Head of IT</h3>
          <p>Clara Vuillemin studierte Maschinenbau und Elektrotechnik in Lausanne und Moskau. Daneben arbeitete sie in zahlreichen Jobs: auf dem Bauernhof, bei NGOs in New York, Perm (im Ural) und Kasachstan, war Reporterin bei der «Moskauer Deutschen Zeitung», App-Programmiererin in Winterthur, IT-Verantwortliche im Rotpunktverlag Zürich, Politikerin bei den Jungen Grünen, und gab – ihr bisheriger Lieblingsjob – in Lausanne Physik für Ingenieursstudenten: Mechanik, Elektrotechnik, Quantentheorie. Sie spricht schnell, denkt noch schneller. Einer ihrer Lieblingssätze ist: «Let’s get this shit done!» Wenn Vuillemin etwas nicht versteht, hat nicht sie ein Problem, sondern der, der Unverständliches gesagt hat. Ihr Job bei Project R ist der Aufbau einer IT-Architektur: Open Source, brauchbar auch für andere Medien und Entwickler, anpassbar an Entwicklung und Ideen der Redaktion: «Ich will, dass es schön ist. Ich will, dass es schnell ist. Ich will, dass es sicher ist.»</p>
          <p><a href="mailto:clara.vuillemin@project-r.construction">clara.vuillemin@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/patrick_recher.jpg" alt="" />
          <h2>Patrick Recher,&nbsp;28</h2>
          <h3>Software-Entwicklung</h3>
          <p>Patrick Recher, der Mann für die Datenbanken, machte seine Informatiker-Lehre bei der Swisscom, wo jeder Lehrling ein Generalabonnement in die Hand gedrückt bekam und die Möglichkeit, sich irgendwo im Unternehmen zu bewerben. Was ihn faszinierte, waren Netzwerke: Er hatte schon mit 12 die Nachbarhäuser verkabelt. Was ihn weniger faszinierte war das Informatikstudium danach: lauter veraltete Software. («Für Informatiker gehört es zum guten Ton, dass du das Studium abbrichst.») Er wurde trotzdem zwei Mal Schweizer Vizemeister in Informatik. Und erhielt eine Goldmedaille (leider keinen Barren) von der Nationalbank für seine Lehrabschlussarbeit zur Finanzkrise. Seinen grössten Coup landete er mit seiner Maturarbeit: Für das erste iPhone entwickelte er eine App, die ein beliebiges Landschaftsfoto mit Orts-, Fluss- und Bergnamen beschriftete. Recher schlug damit die Entwickler aus der ETH, die mit einem ähnlichen Vorhaben gescheitert waren. Und hatte noch vor dem Abschluss einen Job als App-Entwickler. Bei Project R ist seine Verantwortung, die Programme für alles Verborgene zu entwickeln: Artikelverwaltung, Userverwaltung, Zahlungsabwicklung – «immer mit einem innovativen Twist.»</p>
          <p><a href="mailto:patrick.recher@project-r.construction">patrick.recher@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/thomas_preusse.jpg" alt="" />
          <h2>Thomas Preusse,&nbsp;25</h2>
          <h3>Software-Entwicklung</h3>
          <p>Thomas Preusse schaffte es, als Programmierer in Rekordzeit zwei Journalistenpreise zu gewinnen – obwohl er «lieber 100 Zeilen Code schreibt als einen einzigen Satz». 2016 gewann er (mit Markus Häfliger) den Zürcher Journalistenpreis für die Aufdeckung der Kasachstan-Affäre, welche die damalige Nationalratspräsidentin Christa Markwalder in Bedrängnis brachte. Preusse hatte die Suchmaschine gebaut, mit der ein Datenleck der kasachischen Regierung durchforstet werden konnte. Im Jahr zuvor hatte er mit einem NZZ-Team den deutschen Reporterpreis für die beste Web-Reportage erhalten: eine Rekonstruktion des Flugs MH370, der spurlos über dem Indischen Ozean verschwand. Seine Laufbahn begann Preusse als Webdesigner bei einer Werbeagentur in Kanada, zuletzt arbeitete er bei der Web-Agentur «Interactive Things» in Zürich. Preusses Hauptjob bei Project R ist der Aufbau des sogenannten Frontends: einem Interface, das für die Leser und Redaktion so vollkommen unauffällig funktionieren soll wie in einem englischen Schloss der Butler.</p>
          <p><a href="mailto:thomas.preusse@project-r.construction">thomas.preusse@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/constantin_seibt.jpg" alt="" />
          <h2>Constantin Seibt,&nbsp;50</h2>
          <h3>Konzeption und Redaktion</h3>
          <p>Constantin Seibt war ein Kind, das Abenteurromane las. Und den Plan fasste, eines Tages dasselbe zu machen: Nicht Abenteuer zu erleben. Aber Abenteuerromane zu schreiben. Mit 22 kam er seinem Ziel am nächsten: Er schrieb mit einem Kollegen einen Krimi. Die Folge waren Aufträge von Zeitungen. Seibt blieb im Journalismus, erst bei der Zürcher Studierendenzeitung «ZS», später bei der Wochenzeitung «WoZ» und schliesslich beim «Tages-Anzeiger». Sein Spezialgebiet wurde die Grauzone zwischen Politik und Wirtschaft: von der Finanzkrise bis zur Eurokrise. Für seine Reportagenserie zum Swissair-Prozess erhielt er 2008 den Zürcher Journalistenpreis. Seibt ist einer der wenigen Reporter, die nicht nur eine Praxis, sondern auch eine Theorie haben: 2015 erschien sein Buch «Deadline» über das Handwerk des Schreibens. Die Bilanz ist also, dass Seibt sein Ziel um 180 Grad verfehlt hat: Der Beruf als Reporter verwandelte zwar sein Berufsleben in eine Kette von kleinen Abenteuern. Doch der Abenteuerroman blieb ungeschrieben. Project R soll dafür sorgen, dass es dabei bleibt.</p>
          <p><a href="mailto:constantin.seibt@project-r.construction">constantin.seibt@project-r.construction</a></p>
        </div>

        <div className="Portrait">
          <img className="Portrait-image" src="https://assets.project-r.construction/images/christof_moser.jpg" alt="" />
          <h2>Christof Moser,&nbsp;37</h2>
          <h3>Konzeption und Redaktion</h3>
          <p>Christof Moser wollte Journalist werden, noch bevor er bis Z buchstabieren konnte – und nachdem sich herausgestellt hatte, dass Regenwaldforscher wegen Arachnophobie keine gute Berufswahl gewesen wäre. Also lancierte er mit 12 seine erste Schülerzeitung, die sich bis zum Ende der Schulzeit in ein Magazin («Nachtisch») weiter entwickelte und dann noch weiter – bis zum mittelgrossen Konkurs. Die Publikation fiel auf einen Betrüger herein. Und Moser zahlte bis 25 Druckereirechnungen ab. Nach einer kaufmännischen Ausbildung stieg Moser als Volontär beim «Brückenbauer» (dem heutigen «Migros-Magazin») in den Journalismus ein. Im Jahr 2000 gehörte er beim Wirtschaftsportal «Moneycab» zu den ersten Onlinejournalisten der Schweiz, danach folgten Stationen als Politik-Reporter bei «Facts», «Weltwoche» und «SonntagsBlick» und eine abgebrochene TV-Stage bei «10vor10». Zuletzt arbeitete er als Bundeshaus-Journalist und Medienkritiker bei der «Schweiz am Sonntag» und als freier Autor für «Literarischer Monat», «Surprise», «Zeit Schweiz» und «Schweizer Illustrierte». Daneben baute er «Infosperber» mit auf und unterrichtet Journalismus-Studentinnen und -Studenten in Politik- und Wirtschaftsjournalismus, Storytelling und Medienethik. Bei Project R kann Moser ein bisher verborgenes Talent ausleben: das Zeichnen von Plänen. Denn davon braucht ein Medienprojekt Unmengen.</p>
          <p><a href="mailto:christof.moser@project-r.construction">christof.moser@project-r.construction</a></p>
        </div>

        <h3>Medienartikel zu Project R</h3>

        <ul>
          <li><a href="http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit">Interview: «Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a></li>
          <li><a href="http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger">Und ewig sparen die Verleger</a></li>
          <li><a href="http://presseverein.ch/2016/10/09/die-rebellion-beginnt/">Die Rebellion beginnt</a></li>
        </ul>

        <p>
          <a href="https://www.facebook.com/Project-R-1283717661652978">Facebook</a> –
          <a href="https://twitter.com/_Project_R">Twitter</a> –
          <a href="%PUBLIC_URL%/media.html">Medieninformation</a>
        </p>

        <p>Wenn Sie informiert bleiben wollen, bitte hier Ihre E-Mail-Adresse eintragen:</p>

        <Newsletter />

        <p>Danke!</p>

        <h2>Project R</h2>
        <p>c/o Hotel Rothaus<br/>
        Sihlhallenstrasse 1<br/>
        CH-8004 Zürich
        </p>
        <img style={{width: 50}} src="https://assets.project-r.construction/images/project_r_logo.svg" />

        <p>Spendenkonto:<br/>
        Verein für unabhängigen Journalismus<br/>
        Hegifeldstrasse 57<br/>
        8404 Winterthur<br/>
        Raiffeisenbank Winterthur<br/>
        IBAN: CH12 8148 5000 0082 2840 1
        </p>
      </div>
    </Layout>
  )
}