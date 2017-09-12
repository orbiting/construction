import React from 'react'

import Layout from '../../src/Layout'
import Cover from '../../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Der Crowdfunding-Code gegen die Frankenstein-Monster-Strategie',
    description: 'Nachwuchsförderung, Debattenkultur, Open-Source-Software – die Project R Genossenschaft legt los. (Und dieser Newsletter kann für Sie mindestens 100\'000 Franken wert sein.)',
    image: 'https://assets.project-r.construction/images/nl7-code.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout url={url} meta={meta} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Backend-Code Screenshot'
      }}
    >
        <h1>Der Crowdfunding-Code gegen die Frankenstein-Monster-Strategie</h1>
        <p>«Die Zeitungskäufe von Christoph Blocher, die Selbstideologisierung der NZZ, die Frankenstein-Monster-Strategie der Tamedia: Ehrlich gesagt wäre es uns lieber gewesen, wir hätten uns geirrt.»</p>
      </Cover>
    )}>
      <p>Ladies and Gentlemen,</p>

      <p>der Journalismus in der Schweiz ist in einem neuen Zeitalter angelangt. Tamedia legt die Zeitungen in der Welsch- und der Deutschschweiz zu je einer riesigen Redaktion zusammen. Der Charakter der einzelnen Zeitungen besteht nur noch aus dem, was sie aus dem Pool herausfischen. Intern schwärmte der Tamedia-Verleger Pietro Supino von den Chancen des «industriellen Journalismus».</p>

      <p>Wir von Project R sehen das anders. Mit dieser Strategie schadet Tamedia der Wächterfunktion der Medien. Und damit der Demokratie. Denn der Verzicht auf die Konkurrenz der Blickwinkel vereinigt zu viel Macht und vernichtet die Medienvielfalt.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/nl7-frankenstein.jpg'
          alt='Frankenstein in Bride of Frankenstein (1935)' />
        <br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'right'}}>
            Foto: Everett Collection/Keystone
        </figcaption>
      </figure>

      <p>Damit bewahrheitet sich eine weitere Prognose, die wir diesen Frühling in der Crowdfunding-Kampagne für die «Republik» gemacht hatten. Die Zeitungskäufe von Christoph Blocher, die Selbstideologisierung der NZZ, die Frankenstein-Monster-Strategie der Tamedia – inzwischen sind das Nachrichten von gestern. Tamedia gründet seine Monsterredaktionen, die BaZ-Holding kauft Gratiszeitungen mit einer Gesamtauflage von 700'000 Stück, die NZZ schasst ihre Kulturkorrespondenten im Feuilleton. Ehrlich gesagt: Es wäre uns lieber gewesen, wir hätten uns geirrt.</p>

      <h3>Dieser Newsletter ist lang – dafür aber mindestens 100'000 Franken&nbsp;wert</h3>

      <p>Was tun? Nun, als kleinem Medium bleibt uns nur, was dem Bauern nach dem Sturm bleibt: den kahl geschlagenen Wald langsam wieder aufforsten. Einen weiteren Einblick, wie genau wir das tun, erhalten Sie in diesem Newsletter.</p>

      <p>Zunächst eine Warnung: Dieser Brief ist ein wenig lang. Falls Sie also Dringendes zu tun haben, lesen Sie ihn ein bisschen später. Aufforstung braucht Geduld. Sie haben Zeit.</p>

      <p>Vielleicht scrollen Sie einfach auch schnell bis zum PS durch. Dann, wenn Sie nur daran interessiert sind, eine unserer Veranstaltungen im neu eröffneten Kosmos in Zürich zu besuchen. </p>

      <p>Falls Sie jetzt trotzdem weiterlesen, werden Sie einiges über unsere Bemühungen erfahren, nicht nur brauchbaren Journalismus zu machen, sondern auch brauchbare Software. Und Sie erfahren alles zur Programmierung der Crowdfunding-Seite der Republik. Und über die schockierenden Minuten, in denen beinahe unser ganzes Unternehmen abgestürzt wäre.</p>

      <p>Am wertvollsten ist dieser Newsletter für Sie, wenn Sie selbst ein grösseres Crowdfunding planen: Dann kann seine Lektüre für Sie 100'000 Franken wert sein. Der Grund ist, dass Project R bei der Gründung der Republik ein Versprechen abgab: Gemeinnützigkeit. Unser Unternehmen ist ja in zwei Teile aufgespalten. Die Republik AG konzentriert sich auf die Praxis des Journalismus: Ihr Job ist, das Magazin zu machen. Die Project R Genossenschaft dagegen hat die Aufgabe, sich um mehr als nur das eigene Geschäft zu kümmern: um die Institution des Journalismus.</p>

      <p>Unter anderem tut sie dies mit folgenden Mitteln:</p>

      <ul>
        <li>Mit der Veranstaltung von Debatten. (Die Premiere dazu finden Sie im PS.)</li>
        <li>Mit Ausbildung. (Soeben wurde das Ausbildungskonzept verabschiedet – ab Mitte 2018 werden die ersten vier Auszubildenden bei der Republik anfangen.)</li>
        <li>Mit juristischem Know-how – nicht zuletzt als Schutzschild für die Republik.</li>
        <li>Mit Open-Source-Software. Was immer wir an Programmen entwickeln, wir veröffentlichen den gesamten Code. Kostenlos. Für alle, die ihn brauchen können.</li>
        <li>Mit der periodischen Veröffentlichung von Vorgängen, die in anderen Firmen als Geschäftsgeheimnis gelten: Dazu gehören alle Fehler, alle Tricks, alle Strategien, geglückte wie gescheiterte. (Wir fangen in diesem Newsletter gleich an.)</li>
      </ul>

      <p>Software wie Geheimnisse veröffentlichen wir, weil es uns sinnlos erscheint, dass jemand Zeit, Geld und Gedanken verschwendet, indem er oder sie etwas zum zweiten Mal macht. Egal, ob es Verbündete sind. Oder die Konkurrenz. (Konkurrenz ist vital für das publizistische Geschäft – sie inspiriert.) </p>

      <p>Der wichtigste Brocken erscheint bereits: Wir veröffentlichen regelmässig den neusten Stand unseres Redaktionssystems, die Prototypen. Im Januar 2018 das funktionsfähige System. Danach alle Updates. Heute publizieren wir quasi die Vorspeise zum Steak: den kompletten Code zu unserer Crowdfunding-Seite. Sie sollte für alle brauchbar sein, die Ähnliches planen. Immerhin brach sie diesen Frühling den Crowdfunding-Weltrekord für Medien.</p>

      <p>Den Code dazu finden Sie auf unserer Code-Sharing-Seite auf GitHub mit dem poetischen Titel «The Orbiting Elephant»: <a href='https://github.com/orbiting'>github.com/orbiting</a></p>

      <p>Und damit zu den Einzelheiten – damit Sie im Fall eines Falls entscheiden können, ob Sie das Ding brauchen können.</p>

      <h3>Warum die Seite selbst programmieren?</h3>

      <p>Planen Sie ein Crowdfunding, stehen Sie vor einer harten Entscheidung: Gehen Sie zu einer der Profi-Plattformen oder programmieren Sie selbst? Wir taten es selbst – und es war keine Entscheidung, die wir mit Begeisterung getroffen haben. Um ehrlich zu sein: Wir versuchten, es zu vermeiden. Denn das hiess: volles Risiko.</p>

      <p>Was bei IT-Fehlern passieren kann, zeigte der Fall von NZZ.at, der österreichischen Tochter der NZZ. Sie war schon in der Minute der Geburt zum Tod verurteilt. Sie startete mit grossem Wirbel am 21. Januar 2015 – und dann fielen beim Start die Zahlungssysteme aus. Für eine ganze Woche. Keiner der Neugierigen konnte abonnieren. Später schätzte man, dass der Ausfall die NZZ.at rund 2000 Abonnenten kostete. (Sie brauchte 10'000.) Von diesem Schlag erholte sich der Start-up nie mehr.</p>

      <p>Den Todesstoss erhielt die Firma dann ebenfalls durch die Informatik: Als man später das Redaktionssystem auf das der NZZ umstellte, erwies es sich als unmöglich, die Kundendatenbank zu übertragen: Die NZZ.at musste allen Abonnenten kündigen – mit der Bitte, sich neu einzutragen. Nur die Hälfte tat das. Damit war das Schicksal besiegelt: Im April 2017 wurde sie eingestellt.</p>

      <p>Kurz: Ein grober Softwarefehler – und Sie sind tot, egal, wie gut oder schlecht Sie werben oder schreiben. Der Grund, warum wir uns trotzdem entschlossen, die Seite selber zu programmieren, war der, dass die professionellen Crowdfunding-Dienste trotz langer Verhandlungen uns mehrere Dinge nicht liefern konnten, die wir brauchten. Das waren:</p>

      <ol>
        <li><strong>Schönheit.</strong> Wer ein Crowdfunding bei einem professionellen Anbieter macht, muss auch dessen Layout übernehmen. Und das hat den Charme eines Schrebergartens. Wir wollten dagegen Weite, Grosszügigkeit, Klarheit – ein Stück Technik mit der Eleganz eines Stücks Natur. Das nicht zuletzt, weil wir ohne Produkt antraten. Und die einzige Möglichkeit für die Vorschau auf das Produkt bestand im Stil der Kampagne.</li>

        <li><strong>Einfachheit.</strong> Der Weg, bei einer Profi-Crowdfunding-Seite zu zahlen, braucht Zeit: Man muss sich erst bei der Hauptseite registrieren, ein Passwort erstellen, bevor man irgendetwas unterstützen kann. Wir wollten den Weg zur Zahlung pfeilschnell machen: ohne Passwörter und Umwege. Nach der Philosophie des irischen Dichters (und Trinkers) Brendan Behan: «Möge die gebende Hand niemals zittern.» Ausserdem wollten wir mit unseren Verlegern so charmant, klar und direkt wie möglich reden: also von Antwortmails bis zu Fehlermeldungen alles selber texten.</li>

        <li><strong>Zahlungsdaten.</strong> Crowdfunding-Agenturen geben zwar das Geld und die Mail-Adressen weiter, aber nicht die Zahlungsdaten. Das wäre verheerend für ein Unternehmen, das nicht nur eine Kick-off-Finanzierung will, sondern eine langfristige Beziehung zu seinen Abonnementen.</li>

        <li><strong>Infrastruktur.</strong> Eine Profi-Crowdfunding-Seite zu benutzen, erspart einem viel: etwa den ganzen Ärger mit den Zahlungsanbindungen. Nur uns hätte das nichts erspart: Wir mussten sie sowieso programmieren. Also taten wir es sofort.</li>

        <li><strong>Geld.</strong> Die Crowdfunding-Firmen nehmen für ihre Dienste 8 bis 12 Prozent der Einnahmen. Programmiert man selbst, gibt man an die Zahlungsanbieter 2 bis 4 Prozent ab. Doch das Geldargument war das kleinste bei unserer Entscheidung. (Zwar lohnte es sich im Nachhinein. Der Unterschied betrug etwa 230'000 Franken. Aber das war unvorhersehbar: Niemand von uns rechnete damit, dass das Crowdfunding derart atemberaubend laufen würde.) </li>
      </ol>

      <p>Vor allem die Punkte 1 bis 4 führten zu dem Unternehmensentscheid, den unser Programmierer Patrick Recher wie folgt beschrieb: «Fuck, dann müssen wir das Teil halt selber bauen.»</p>

      <h3>2. Welche Entscheidungen treffen Sie, wenn Sie unsere Seite übernehmen?</h3>

      <p>Schreiben ist schon schlimm genug: Man muss dauernd Entscheidungen treffen: dieses Wort oder jenes oder keines. Jeder Text ist ein Massaker an seinen Varianten.</p>

      <p>Programmieren ist noch brutaler. Beim Schreiben ist die Strafe für Nichtentscheidungen mild: Man produziert Schwurbel. Beim Programmieren riskiert man die Todesstrafe: ein unverständliches Programm oder den Systemabsturz. </p>

      <p>Ihre Entscheidung, ob Sie unsere Seite für Ihr Crowdfunding übernehmen wollen oder nicht, hängt davon ab, ob Sie ähnliche Entscheidungen treffen wollen, wie wir sie trafen. Die wichtigsten sind:</p>

      <ul>
        <li>Der Weg zur Zahlung wurde (wie gesagt) so schnell wie möglich gestaltet: Die Seite fragt erst nach der Kreditkarte, erst später nach der Bestätigung der E-Mail und nach der Adresse. (Quasi die sanfte Variante des inoffiziellen Mottos der Schweizer Tourismusbranche: «Send your money, but don’t come.»)</li>
        <li>Wir haben versucht, den ganzen Vorgang so einfach wie möglich zu gestalten. Die Seite wurde mit den Grossvätern und Grossmüttern unserer Teammitglieder getestet – fast alle kamen durch.</li>
        <li>Alle Antwortmails und Fehlermeldungen sind individualisierter – damit man einer persönlichen Kommunikation so nahe wie möglich kommt.</li>
        <li>Zur Einfachheit gehört auch das Konzept, dass die Seite sofort nach der Zahlung ohne Eingabe eines Passworts betretbar ist. (Was komplex zu programmieren war, aber dann erstaunlich klaglos funktionierte.)</li>
        <li>Vorhanden, wenn auch ein wenig unauffällig, war unter dem «Mitmach»-Button auch der Vermerk: «Ich kann mir diesen Betrag nicht leisten.» Darauf folgte ein Link, bei dem man den Betrag für die Mitgliedschaft selbst eintragen konnte: von 1 Franken an. Zu unserer Verblüffung wurde diese Möglichkeit alles andere als missbraucht: Im Schnitt zahlten weniger vermögende Verleger 170 Franken – mit zuweilen einer Lebensgeschichte als Begründung, warum sie nicht 240 zahlten. Vertrauen lohnt sich.</li>
        <li>Spät, auf das Lobbying unseres Community-Managers Richard Höchner hin, wurde die Community-Seite programmiert, auf welche die neuen Verlegerinnen und Verleger ein Foto und einen Slogan hochladen konnten. Wir rechneten mit 100, 200 Leuten – es kamen genau 4000. Ihre Fotos sehen nun von Flachbildschirmen mal mild, mal streng auf unsere Sitzungen hinunter, zwecks Erinnerung, für wen wir arbeiten. Das klappt – es wirkt so einschüchternd wie eine Verleger-Ahnengalerie in Öl. </li>
        <li>Eine weitere Überraschung war die Mitgliedsnummer. Sie wurde erst in der Nacht vor dem Crowdfunding fertig programmiert – und wurde verblüffend populär: Nicht selten stellen sich uns Verleger mit ihrer Mitgliedsnummer vor – und besondere Zahlen (wie 12'345) waren erstaunlich begehrt.</li>
        <li>Dafür gingen die ziemlich aufwendig organisierten Prominentenvideos in der Flut unbeachtet unter. Offensichtlich verscheucht vom republikanischen Geist.</li>
        <li>Das Härteste zum Programmieren waren die Zahlungsanbindungen. Wir wählten den Weg, mit allen Anbietern direkt zu verhandeln. Dazu später mehr. </li>
      </ul>

      <h3>Was Sie zu fürchten haben: Crashs</h3>

      <p>Das Tückische beim Crowdfunding ist, dass der Ansturm entweder am Anfang kommt oder nie. Erreicht das Projekt in den ersten Tagen nicht mindestens einen Drittel des Ziels, ist es so gut wie gestorben. Nur ist das auch die Zeit, in der Ihr System am anfälligsten ist. Irgendeine Kinderkrankheit wird es haben, garantiert.</p>

      <p>Das Crowdfunding der Republik begann am 26. April 2017, um 7 Uhr morgens. Die Lobby im Rothaus war prallvoll gepackt mit verregneten Verlegern, dem Geruch nach Aufregung und nassem Hund. Eine Etage weiter oben sass das IT-Team im Maschinenraum, einem winzigen Hotelzimmer. An dessen Tür waren massive Drohungen befestigt, nicht zu stören.</p>

      <figure style={{margin: '0 0 10px'}}>
        <img
          src='https://assets.project-r.construction/images/nl7-warroom.jpg'
          alt='Das IT-Team im kleinen Maschinenraum' />
        <br />
        <figcaption style={{fontSize: 10, fontFamily: 'sans-serif', margin: 0, textAlign: 'left'}}>
          Als die «Republik» kurz auf der Kippe stand: Momente des Schreckens am 26. April im IT-Team.
          <span style={{float: 'right', marginLeft: 5}}>
            Foto: Jan Bolomey für Project R
          </span>
        </figcaption>
      </figure>

      <p>Sie hatten die Nacht durchprogrammiert, ein paar Hundert letzte Änderungen, tranken mechanisch Kaffee und begannen sich zu entspannen. Dann, um 7.32 Uhr, stürzte das System ab. Panik herrschte. Das System wurde ab- und eingeschaltet – und lief nach zwanzig endlosen Sekunden erneut. Dann stürzte es zwei weitere Male ab: um 9.00 Uhr und 9:58 Uhr.</p>

      <p>Draussen, im Netz, fand ein wilder Ansturm statt: von Verlegerinnen und Leuten, die alle paar Minuten die Republik-Seite neu aufriefen, um die Zahl im Zähler zu beobachten, die in schnellem Rhythmus stieg.</p>

      <p>Drinnen, im Maschinenraum, sah das Team fassungslos auf den Kontrollmonitor, der sich in rasendem Tempo mit Fehlermeldungen füllte. Diese scrollten rot gefärbt den Bildschirm hoch, erst einzelne, dann zu Hunderten, in einem Tempo, dass niemand sie mehr lesen konnte – ein Strom aus maschinellem Blut. Der Programmierer Patrick Recher war überzeugt, das Internet noch nie so brutal erlebt zu haben.</p>

      <p>
        <img
          src='https://assets.project-r.construction/images/nl7-error.jpg'
          alt='Bildschirm mit Fehlermeldungen' />
      </p>

      <p>Das Team versuchte das System zu entlasten, indem es alles Überflüssige abschaltete: etwa die Community-Seite und das sekündliche Update des Zählers. Es half nicht viel.</p>

      <p>Gegen 10.10 Uhr hatte Patrick Recher den Fehler gefunden: Zwei Zeilen Code bei der Datenbank fehlten. Es handelte sich um zwei Befehle, welche die Datenbank anwiesen, bei Abbruch des Zahlungsverkehrs die Transaktion zu beenden. Eigentlich wäre das eine Sache von Millisekunden gewesen. Doch ohne Abschluss blieb die Transaktion offen. Die Datenbank füllte sich mit ihrer eigenen Arbeit, bis sie kollabierte.</p>

      <p>Nun stand das Team vor einem Dilemma: Das gesamte System funktionierte zwar noch passabel, man musste es jedoch immer wieder neu starten. Und der Ansturm von Neuverlegerinnen und Neuverlegern war jenseits aller Erwartung. (Bis Mitternacht waren es 5651 Verleger und über eine Million Franken.) Und der Fehler lag im Herzen des Systems. Die Frage war, ob man ihn korrigieren sollte – mit dem Risiko, dass man bei der Korrektur einen Fehler macht und das System abstürzen würde.</p>

      <p>Um 10.42 Uhr riskierte das Team den Neustart mit der korrigierten Version. Sie lief. Und zwar für die restlichen 34 Tage problemlos. Bis auf einen mysteriösen, nie geklärten Crash, Sekunden nachdem das Fernsehen in der «Tagesschau» die Nachricht vom erfolgreichen Crowdfunding der Republik gebracht hatte.</p>

      <p>Um 10 Uhr abends befahl die IT-Chefin Clara Vuillemin, dass der Frontend-Programmierer Thomas Preusse nach Hause müsse – und zwar in Begleitung. Preusse hatte 48 Stunden durchgearbeitet und keinen Tropfen Adrenalin mehr im Blut. Man warf ihn auf sein Bett wie einen bärtigen Sack, wo er innert Sekunden ins Koma fiel. Um 3 Uhr sass er im Bett, hellwach. Ihm war eine weitere mögliche Fehlerquelle eingefallen: die zu kleine Datenbank. Preusse ging ins Netz, kaufte eine riesige Datenbank für 1200 Franken im Monat, kopierte die Daten, schloss das Teil an und sank um 5 Uhr morgens in den zweiten Teil der Bewusstlosigkeit.</p>

      <p>Die vier Ausfälle betrugen insgesamt vielleicht nur 120 Sekunden. Sie genügten aber, dass rund 300 Leute aus dem System geworfen wurden, nachdem sie gezahlt hatten, aber noch bevor sie sich registriert hatten. Sie aufzufinden, brauchte tagelange Detektivarbeit bei den Zahlungsanbietern. Die Crashs kosteten sehr viel Nerven, sehr viel Zeit, sehr viel Geld.</p>

      <p>Aber das war die milde Variante. Näher war unser Unternehmen noch nie am Abgrund, jedenfalls bis jetzt. Aber wir hatten Glück (und die richtigen Leute an Deck): Das Schicksal der NZZ.at blieb uns erspart.</p>

      <h3>Was es kostet, was es bringt</h3>

      <p>Nun, die Republik-Seite eignet sich nicht für kleine Crowdfundings. Dafür sind die Profi-Plattformen besser aufgestellt. Sie ist eine Plattform für grosse, kühne Projekte.</p>

      <p>Denn um sie für Ihre Pläne zu nutzen, brauchen Sie eine Agentur oder besser zwei versierte Programmierer, für mindestens zwei Wochen. Deren Job besteht im Wesentlichen aus drei Dingen: 1. das Design auswechseln. 2. den eigenen Provider, die eigene Datenbank, das eigene Mailprogramm anbinden (ein ziemliches Paket). 3. die Zahlungsanbindungen herstellen: Das kostet Wochen an Verhandlungen und Zeit. Die Kreditkartenverbindung war die einfachste Sache, der Einzahlungsschein selbst programmierbar, also problemlos, PayPal benahm sich schon einiges komplizierter, die Verhandlungen mit der Postfinance glichen einer diplomatischen Mission.</p>

      <p>Die Kosten? Etwa 10'000 Franken, falls Sie selbst programmieren lassen, etwa 20'000 bis 30'000 Franken, wenn Sie eine Agentur anstellen. (Letzteres ist weniger empfehlenswert, nicht wegen des höheren Preises, sondern weil Sie dann ausgeliefert sind. Die NZZ.at scheiterte auch deshalb, weil sie zum Bau ihrer Website eine Agentur angeheuert hatte, die wiederum eine Agentur für die Zahlungsanbindungen anheuerte – das Resultat: eine Reihe fallender Dominosteine.)</p>

      <p>Was Sie als Basis von uns kostenlos erhalten, ist eine Plattform, in die von unserem Programmierteam (Thomas Preusse am Frontend, Patrick Recher am Backend und Clara Vuillemin als Head of Product) drei Monate konzentrierte Arbeit gesteckt wurde – würden Sie so etwas selbst entwickeln lassen, es kostete Sie zwischen 100'000 und 200'000 Franken.</p>

      <h3>Tipps</h3>

      <p>Ein Crowdfunding lebt nicht von der Website allein. Von aussen sieht die Sache zwar entspannt aus. Man schaltet eine Seite auf. Wartet. Und dann kommt Geld. (Oder nicht.) Doch von Nahem verflüchtigt sich aller Buddhismus. Ein grösseres Crowdfunding braucht Monate Arbeit. Mit der Logistik dahinter könnte man auch ein kleines Land erobern, etwa San Marino.</p>

      <p>Die ersten Vorbereitungen zum Crowdfunding der Republik begannen (obwohl wir das damals nicht wussten) schon fast zwei Jahre davor: Wir redeten mit rund vier Dutzend Journalistinnen, Verlagsprofis, Werbern, Anwälten über das noch geheime Project R. (Ein kleines Wunder, dass alle dichthielten.) Das half doppelt: Erstens durch kompetentes Feedback. Zweitens erobert das Herz von Leuten wenig mehr, als wenn man sie fragt. Wir hatten dadurch einen harten Kern von freundlichen Unterstützerinnen und Unterstützern.</p>

      <p>Zweitens hatten wir vor dem Crowdfunding die E-Mails von 8000 Leuten, die sich für das Projekt interessierten. Und – nach einem Telefon- und Diplomatiemarathon – wir waren beim Start auf den Newslettern anderer Organisationen mit insgesamt 200'000 Adressaten. Last, not least luden die zehn Mitglieder unseres Teams in der Nacht vor dem Crowdfunding sämtliche Adressen von Bekannten in eine Mailkanone.</p>

      <p>Drittens müssen Video, Text, Newsletter und Botschaft passen. Das heisst vor allem: Nicht allen passen. Das deshalb, weil aus allgemeiner Zustimmung niemand handelt. Das Pathos der Republik-Gründung hatte entscheidende Gegner. Aber noch entscheidender: auch das Gegenteil.</p>

      <p>Viertens muss man sich wappnen: Das Team eines grösseren Crowdfundings wird im entscheidenden Monat durch die Hölle gehen. Bei Erfolg wie bei Misserfolg. Bei Misserfolg kämpft es ums Überleben, bei Erfolg überschwemmen Hunderte von Mails, Telefonaten, Supportanfragen die Organisation. Nach einer Woche Erfolg sah unsere Crew aus, als hätte sie sieben Nächte unter einer Brücke geschlafen.</p>

      <p>Fünftens: das Timing. Das ist ein Gramm Instinkt – und ein Kilo Glück. Das Crowdfunding der Republik fand zu einer Zeit statt, in der Donald Trump gerade in den USA das Amt als Präsident übernommen hatte, die Briten sich zum Austritt aus der EU entschlossen hatten und in Frankreich in den Umfragen vor der Wahl lange der Front National führte. Plötzlich waren Selbstverständlichkeiten nicht mehr selbstverständlich: Dinge wie der Rechtsstaat, die Gewaltenteilung, die Demokratie und die Freiheit der Presse. Nicht, dass wir uns freuten, dass das so war: Eine Zeit lang fragten wir uns, ob es nicht übertrieben sei, dass die Welt ein Replay der 30er-Jahre androhte – nur dazu, dass wir ein Onlinemagazin zum Fliegen bringen konnten.</p>

      <p>Kurz: Sie haben unseren Respekt, wenn Sie ein grösseres Crowdfunding wagen. Es ist kein ganz freundliches Abenteuer. Und es wäre eine Ehre, wenn Sie dabei unsere Seite brauchen könnten.</p>

      <p>Hier noch einmal der Link zum Code: <a href='https://github.com/orbiting'>github.com/orbiting</a></p>

      <p>Und Ihnen, allen Verlegerinnen und Verlegern, die bis hierhin durchgehalten haben, ohne persönlich ein Crowdfunding zu planen, verleihen wir den Tapferkeitsorden. Für Ihre Neugier.</p>

      <p>Mit herzlichen Grüssen</p>

      <p>Ihre Crew von Project R und der Republik</p>

      <p>PS: Diesen Herbst führt Project R eine kleine Debattenreihe im neu eröffneten Europaallee-Koloss Kosmos in Zürich durch. Die erste Veranstaltung, am Montag 18. September, trägt den Titel «Gesünder durch Informationsdiät!». In den Monaten darauf sprechen wir über das Erwachsenwerden (Taten statt Jammern), die Grenze zwischen Aktivismus und Journalismus und im Dezember zum Stand des Irrtums in der «Republik». Den Link dazu finden Sie auf der Veranstaltungsseite des Kosmos: <a href='https://kosmos.ch/programm/veranstaltungen/kosmopolitics-gesuender-durch-informationsdiaet-/100525#details'>kosmos.ch</a></p>

      <p>
        <img
          src='https://assets.project-r.construction/images/nl7-kosmos.jpg'
          alt='Smart-Phone-Screen mit Event-Ankündigung für Project R Anlass im Kosmos' />
      </p>

      <p>PPS: Falls Sie etwas für die Vielfalt im Mediensystem tun wollen und noch nicht bei uns Verlegerin oder Verleger sind, können Sie das in Minutenschnelle ändern. Und zwar hier: <a href='https://www.republik.ch'>www.republik.ch</a></p>

      <p>PPPS: Und falls Sie die nun aller Geheimnisse beraubte Crowdfunding-Seite besichtigen wollen, können Sie das hier tun: <a href='https://www.republik.ch/crowdfunding'>www.republik.ch/crowdfunding</a></p>

    </Layout>
  )
}
