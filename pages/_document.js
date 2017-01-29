import Document, {Head, Main, NextScript} from 'next/document'

import {renderStatic} from 'glamor/server'

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
        </body>
      </html>
    )
  }
}