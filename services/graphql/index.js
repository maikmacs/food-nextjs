import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

const baseURL = 'https://sindelantal-backend.herokuapp.com/' + 'graphql';

// const httplink = createHttpLink({
//   uri: baseURL + 'graphql'
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    uri: baseURL + 'graphql',
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
  }),
  cache: new InMemoryCache()
});

export default client;
