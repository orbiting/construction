import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-unfetch'
import { API_BASE_URL } from '../publicEnv'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState = {}, headers = {}) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: `${API_BASE_URL}/graphql`,
      opts: {
        // Additional fetch() options like `credentials` or `headers`
        credentials: 'include',
        headers: {
          cookie: headers.cookie
        }
      }
    })
  })
}

export default function initApollo (initialState, headers) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, headers)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
