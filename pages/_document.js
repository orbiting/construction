import Document, {Head, Main, NextScript} from 'next/document'

import {renderStatic} from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({renderPage}) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return {
      ...page,
      ...styles,
      env: require('../lib/publicEnv')
    }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, env } = props
    if (env) {
      __NEXT_DATA__.env = this.props.env
    }
  }

  render () {
    const { css, env: {
      PIWIK_URL_BASE, PIWIK_SITE_ID
    } } = this.props
    const piwik = (
      !!PIWIK_URL_BASE &&
      !!PIWIK_SITE_ID
    )

    return (
      <html>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
          {piwik && <script dangerouslySetInnerHTML={{__html: `
            var _paq = _paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              _paq.push(['setTrackerUrl', '${PIWIK_URL_BASE}/piwik.php']);
              _paq.push(['setSiteId', '${PIWIK_SITE_ID}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src='${PIWIK_URL_BASE}/piwik.js'; s.parentNode.insertBefore(g,s);
            })();`}} />}
          {piwik && <noscript>
            <img src={`${PIWIK_URL_BASE}/piwik.php?idsite=${PIWIK_SITE_ID}&rec=1`} style={{border: 0}} alt='' />
          </noscript>}
        </body>
      </html>
    )
  }
}
