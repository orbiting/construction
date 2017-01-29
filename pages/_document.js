import Document, {Head, Main, NextScript} from 'next/document'

import {renderStatic} from 'glamor/server'

import 'glamor/reset'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    let nextProps
    const {css} = renderStatic(() => {
      nextProps = Document.getInitialProps(ctx)
      return nextProps.html
    })
    const {nextCSS, ...props} = nextProps
    return {...props, css, nextCSS: {styles: nextCSS.styles}}
  }

  render () {
    const {css} = this.props
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: `var _paq = _paq || [];
            // tracker methods like "setCustomDimension" should be called before "trackPageView"
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//piwik.project-r.construction/";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();`}} />
          <noscript>
            <img src='https://piwik.project-r.construction/piwik.php?idsite=1&rec=1' style={{border: 0}} alt='' />
          </noscript>
        </body>
      </html>
    )
  }
}
