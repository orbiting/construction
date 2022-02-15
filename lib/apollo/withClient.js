import React from 'react'
import { getDataFromTree } from 'react-apollo'
import initApollo from './initApollo'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default App => {
  return class WithApolloClient extends React.Component {
    static displayName = `WithApolloClient(${getComponentDisplayName(
      App
    )})`

    static async getInitialProps(appCtx) {
      const { ctx, AppTree } = appCtx
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (App.getInitialProps) {
        composedInitialProps = await App.getInitialProps(appCtx)
      }
      composedInitialProps.url = { query: ctx.query, pathname: ctx.pathname }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo(undefined, ctx.req.headers)

        try {
        // Run all GraphQL queries
        await getDataFromTree(
          <AppTree
            {...composedInitialProps}
            apolloClient={apollo}
            serverContext={ctx}
          />
        )
        } catch (error) {
          console.error(error)
        //   // Prevent Apollo Client GraphQL errors from crashing SSR.
        //   // Handle them in components via the data.error prop:
        //   // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }


        serverState = apollo.cache.extract()
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.apollo = initApollo(this.props.serverState)
    }

    render() {
      return (
        <App apolloClient={this.apollo} {...this.props} />
      )
    }
  }
}
