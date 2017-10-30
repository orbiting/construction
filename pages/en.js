import React from 'react'
import Layout from '../src/Layout'
import Cover from '../src/Cover'

export default ({url}) => {
  const meta = {
    title: 'Project R',
    description: '«Project R is a Switzerland-based cooperative fighting for independent journalism, freedom of expression, public debate and a functioning democracy.»',
    image: 'http://localhost:8000/images/optimized/header_front.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url} cover={(
      <Cover image={{
        src: 'http://localhost:8000/images/optimized/header_front.jpg',
        alt: 'Balkon vom Hotel Rothaus mit gehisstem Project R Logo'}}
      >
        <h1>Project R</h1>
        <p>{meta.description}</p>
      </Cover>
    )}>
      <p />

      <p>We are reclaiming journalism as a profession and are creating a new business model that places our readers at the center. Our digital magazine Republik (in German) will launch in January 2018. Republik is reader-owned, independent and ad-free.</p>
      <p>Project R is an open-source cooperative, and we share our knowledge, software and business insights with other projects who also want to foster democracy and free speech around the world.</p>
      <p>This May, we collected about € 3.1m in a crowdfunding campaign in which we sold nearly 14’000 subscriptions. We will start publishing in 2018 and are currently scaling up our team and building our editorial office.</p>
      <p>Read more about our crowdfunding here: <br />
        <a href='https://www.cjr.org/innovations/news-startup-crowdfunding-switzerland.php'>Columbia Journalism Review:<br /> ‘Startup that promises ‘no-bullshit journalism’ nets serious cash’</a>.</p>
      <p>
        <img src='http://localhost:8000/images/optimized/manifest_en.jpg' />
      </p>
      <p>Our manifesto sums up what we stand for. Download the manifesto <a href='https://assets.republik.ch/cf_gui/static/manifesto_en.pdf'>here</a></p>

      <h3>Donate</h3>
      <p>
        Donate to support our mission for independent journalism.<br />
        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NZEW4QTG7GWUJ'>Donate with PayPal</a>
      </p>
      <p>
        <strong>Banking Account</strong>
        <table>
          <tr>
            <td>Name</td>
            <td>Project R Genossenschaft</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>Sihlhallenstrasse 1</td>
          </tr>
          <tr>
            <td>City</td>
            <td>8004 Zürich</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>Switzerland</td>
          </tr>
          <tr>
            <td>Bank</td>
            <td>Raiffeisenbank Winterthur</td>
          </tr>
          <tr>
            <td>IBAN</td>
            <td>CH04 8148 5000 0083 4669 1</td>
          </tr>
        </table>
      </p>
    </Layout>
  )
}
