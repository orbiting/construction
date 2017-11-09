import React from 'react'

import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
<<<<<<< HEAD
    title: 'Jobs',
    description: 'Löse mit einem motivierten, multidisziplinären und unorthodoxen Team die interessantesten Probleme der Branche!',
    image: 'http://localhost:8000/images/optimized/header_jobs.jpg',
=======
    title: 'Ausbildung «Unternehmerischer Journalismus»',
    description: 'Ab Mai bietet Project R vier Ausbildungsplätze. Die Bewerbungsfrist läuft bis Ende November.',
    image: 'https://assets.project-r.construction/images/header_jobs.jpg',
>>>>>>> master
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: meta.image,
        alt: 'Fünf Mitarbeiter der «Republik» im Büro'}}
      >
<<<<<<< HEAD
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>

      <h2>Ausbildungsplätze bei der «Republik»</h2>
      <p>Schon hat es sich herumgesprochen. Dass wir 2018 vier Trainees für unternehmerischen Journalismus einstellen. Junge Kolleginnen und Kollegen, die zweierlei mitbringen: schreiberischen Ehrgeiz und unternehmerisches Feuer. Die schon viel können und noch viel mehr vorhaben. Denen wir beibringen, wie man brillante Texte schreibt und ein Medienunternehmen exzellent managt. Und auch wir möchten lernen, mit euch gemeinsam: Wie gestaltet man so eine Ausbildung? Begründet eine «Academy for Entrepreneurial Journalism». Denn dort wollen wir hin.</p>
=======
        <h1>Wir bilden aus!</h1>
        <p>Löse mit einem motivierten, multidisziplinären und unorthodoxen Team die interessantesten Probleme der Branche!</p>
      </Cover>
    )}>

      <p><strong>Wir bieten:</strong> vier Ausbildungsplätze für unternehmerischen Journalismus.</p>

      <p><strong>Wir suchen:</strong> Leute, die anders sind. Die viel können und noch viel mehr vorhaben. Die laut sind und nicht einverstanden sind, die analytisch denken können und ihre Meinung eloquent artikulieren. Wir wollen eine diverse «Republik». Mit verschiedenen Herkünften und Erfahrungswelten, mit eigenwilligen Ausdrucksformen, mit Stimmen, die sich unterscheiden. Wir suchen ehrgeizige Schreiber, die unternehmerisch denken. Wir suchen angehende Unternehmerinnen, die für guten Journalismus brennen. </p>

      <p>Sichere Medienjobs werden bald so selten sein wie optimistische Verlagsmanager. Das ist die schlechte Nachricht. Die gute: Die Investitionen dafür, ein Medienunternehmen zu gründen, sind heute so gering wie niemals zuvor, seit Reinhard Lutz 1571 seine «Warhafftige Zeitung von den Gottlosen Hexen» herausgab, eines der ersten Presseorgane der Neuzeit. Alles, was du heute brauchst, sind eine bestechende Idee, ehrgeizige Mitstreiter, Know-how und ein mutiges Herz. Und los. Es wird Zeit, dass wir unsere eigenen Medien gründen. Die Zeiten für Verlegerinnen und Verleger könnten nicht besser sein.</p>

      <p>Darum gibt es diese Ausbildung. Sie beginnt am Montag, 7. Mai 2018, dauert zwölf Monate und macht dich fit für die digitale Medienzukunft. Sie ist flexibel und auf deine Bedürfnisse zugeschnitten. Mit uns gemeinsam stellst du am Anfang aus einem Baukasten von Modulen deinen eigenen Ausbildungsplan zusammen.</p>

      <p>Auf der unternehmerischen Seite kannst du die Abteilungen Geschäftsführung, Community, Events, Marketing, IT-Entwicklung und Project R Lab durchlaufen – und wirst viel lernen über Projektmanagement, Mitarbeiterführung, Buchführung, Management etc. Du blickst ins Räderwerk eines leserzentrierten, mitgliederbasierten Webmagazins. Lernst, wie man in einen Markt hineinhorcht und einen marktreifen Prototyp entwickelt.</p>

      <p>Auch die journalistische Seite deiner Ausbildung ist massgeschneidert. Bist du eine Wühlmaus? Eine Schönschreiberin? Ein Nachrichtenhund? Bist du Reporter, Essayistin, Datenjunkie, Multimedia-Maniac? Wir wollen alles dafür tun, dir den letzten Schliff im journalistischen Handwerk zu geben. Nur eines können wir dir nicht beibringen: deinen eigenen originellen Blick auf die Welt. Den musst du mitbringen.</p>

      <p>Wir sind ein Start-up. Wir haben viel zu tun. Wir erwarten von dir, dass du selbstständig bist und dich autonom organisieren kannst. Dass wir auf dich zählen können, wenn die Hütte brennt. Dass du, nach Bedarf, die einzelnen Abteilungen unterstützt. Etwa, wenn es darum geht, im Project R Lab Workshops, Prototypen und Konzepte zu entwickeln, für die «Republik» oder andere Medien.</p>

      <p>Betreut wirst du von Nadja Schnetzler (Project R) und Ariel Hauptmeier (Redaktion). Sie begleiten dich durch dein Ausbildungsjahr. Zusätzlich zu deinem Gehalt erhältst du ein Fortbildungsbudget zur freien Verfügung. Du kannst es etwa einsetzen für externe Workshops und Hospitanzen. Wir ermutigen dich, einen Monat lang fremde Luft zu schnuppern – sei es bei einem Praktikum beim «New Yorker», bei einem Reportageseminar an der FNPI in Cartagena oder …</p>

      <p>Wir werden dich bitten, ein Lernjournal zu führen. Denn auch wir möchten lernen, mit dir gemeinsam: Wie gestaltet man so eine Ausbildung? Wie begründet man eine «Academy for Entrepreneurial Journalism»? Denn dort wollen wir hin.</p>

      <p>Dein Gesellenstück wird sein, dass du gemeinsam mit den anderen Trainees die Gründung eines journalistischen Start-ups vorbereitest – und ihr euer Konzept einer handverlesenen Jury präsentiert. Die dieses Konzept, im idealsten Fall, so bestechend findet, dass sie gleich darin investieren möchte.</p>

      <p>Und zugleich entwickelt ihr im letzten Monat die Ausbildung weiter und arbeitet eure Nachfolger ein.</p>

      <img
        src='https://assets.project-r.construction/images/ausbildung.jpg'
        alt='Schema der Ausbildungsmodule im Ausbildungsjahr «Unternehmerischer Journalismus» bei der «Republik»' /><br />

      <p><strong>So bewirbst du dich:</strong> Bitte schick deine Bewerbung bis zum 30. November 2017, 18 Uhr an <a href='mailto:ausbildung@republik.ch'>ausbildung@republik.ch</a></p>

      <p>Diese Bewerbung enthält:</p>
      <ul>

        <li>ein «Motivationsschreiben» in Form eines einminütigen Videos. Zeig uns, wer du bist und warum du zu uns passt. Was dir auf den Nägeln brennt. Lass dir etwas einfallen. Überrasch uns!</li>
        <li>einen tabellarischen Lebenslauf.</li>
        <li>ein bis drei Arbeitsproben. Von Text bis Multimedia bis Projekt. Einen Verweis auf die ein bis drei Dinge, die dir am besten gelungen sind.</li>
        <li>Bitte schreib einen Essay/Kommentar zu einer politischen Frage, die dich umtreibt. Er endet mit der Versicherung: «Ich habe diesen Text allein und ohne Hilfe von Dritten geschrieben.» Oder: Skizziere eine Idee für ein journalistisches Start-up, inklusive eines rudimentären Businessplans. (Nur eines der beiden. Entweder – oder. Bitte höchstens 5000 Zeichen).</li>
      </ul>

      <p>Wir melden uns Anfang Dezember bei dir. Hoffentlich mit einer Einladung zum Auswahltag. Er ist am Samstag, 16. Dezember 2017, von 8 bis 20 Uhr in Zürich.</p>
>>>>>>> master

      <p>Hast du Fragen? Dann schreib an <a href='mailto:ausbildung@republik.ch'>ausbildung@republik.ch</a></p>

<<<<<<< HEAD
      <p>Wir freuen uns auf deine Bewerbung!</p>
=======
      <p>Viel Glück!</p>

>>>>>>> master
    </Layout>
  )
}
