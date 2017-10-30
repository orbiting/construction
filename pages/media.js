import React from 'react'
import Head from 'next/head'

import Layout from '../src/Layout'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const media = [
  {
    href: '/media/2017-04-24-start-crowdfunding',
    title: 'Ein bisschen Mitbesitzerin von «Republik» werden',
    date: 'Zürich, 24. April 2017',
    image: {
      src: 'http://localhost:8000/images/optimized/taufe_bern.jpg',
      alt: 'Taufe des Namen und Logo in Bern'
    }
  },
  {
    href: '/media/2017-04-12-republik',
    title: 'Das Magazin von Project R heisst «Republik»',
    date: 'Bern, 12. April 2017',
    image: {
      src: 'http://localhost:8000/images/optimized/logo_republik.jpg',
      alt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'
    }
  },
  {
    href: '/media/2017-03-15-aufbau',
    title: 'Der Bauplan von Project R steht',
    date: 'Zürich, 15. März 2017',
    image: {
      src: 'http://localhost:8000/images/optimized/enterprise_with_hand.jpg',
      alt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'
    }
  },
  {
    href: '/media/2017-01-10-hotel-rothaus',
    title: 'Project R stellt Aufbau-Crew vor und zieht ins Hotel Rothaus',
    date: 'Zürich, 10. Januar 2017',
    image: {
      src: 'http://localhost:8000/images/optimized/rothaus_thumb.jpg',
      alt: 'Das Hotel Rothaus von aussen'
    }
  }
]

export default ({url}) => {
  return (
    <Layout url={url}>
      <Head>
        <title>Project R Medieninformationen</title>
      </Head>
      <h1>Medien&shy;informationen</h1>

      <Grid>
        {media.map((newsletter, i) => (
          <GridItem key={i}>
            <Card {...newsletter} />
          </GridItem>
        ))}
      </Grid>

      <h3>Medienartikel zu Project R</h3>

      <ul>
        <li><a href='https://www.nzz.ch/feuilleton/medien/in-medias-ras-ein-testfall-fuer-schweizer-journalisten-ld.151509'>Die Idee von Project R liegt in der Luft</a> — NZZ, März 2017</li>
        <li><a href='http://www.srf.ch/sendungen/medientalk/medientalk-wie-gruende-ich-ein-medien-startup'>«Mit Fake News, mit Trump, mit dem langsamen Sterben, dem Niedergang und dem Vor-sich-her-Faulen der grossen Verlage, ist eigentlich klar, dass man etwas tun muss»</a> — Radio SRF4, Januar 2017</li>
        <li><a href='http://www.kontextwochenzeitung.de/medien/304/r-wie-rebellion-4158.html'>R wie Rebellion</a>  —  Kontext, Januar 2017</li>
        <li><a href='https://tsri.ch/zh/projectr/#.WICVuI0axL4.facebook'>«Wenn die Verleger aus der Publizistik ausgestiegen sind, ist es zu spät»</a> — tsüri.ch, Januar 2017</li>
        <li><a href='http://www.persoenlich.com/medien/von-den-konigen-zu-den-rebellen'>Verleger vs. Project R: Von den Königen zu den Rebellen</a> — persönlich.com, Januar 2017</li>
        <li><a href='https://www.nzz.ch/feuilleton/medien/journalismusprojekt-r-news-aus-dem-zuercher-rotlicht-viertel-ld.139282'>News aus dem Zürcher Rotlichtviertel</a> — NZZ, Januar 2017</li>
        <li><a href='http://www.deutschlandradiokultur.de/schweizer-online-magazin-project-r-die-verlage-verwandeln.1013.de.html?dram:article_id=376069'>«Die Verlage verwandeln sich in Internet-Handelshäuser»</a> — Deutschlandradio Kultur, Januar 2017</li>
        <li><a href='https://www.woz.ch/-730f'>Die grosse Wette auf den Journalismus</a> — WoZ, Oktober 2016</li>
        <li><a href='http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit'>«Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a> — persönlich.com, Oktober 2016</li>
        <li><a href='http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger'>Und ewig sparen die Verleger</a> — jungejournalisten.ch, Oktober 2016</li>
        <li><a href='http://presseverein.ch/2016/10/09/die-rebellion-beginnt/'>Die Rebellion beginnt</a> — presseverein.ch, Oktober 2016</li>
      </ul>
    </Layout>
  )
}
