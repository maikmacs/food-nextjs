import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

const baseURL = 'https://sindelantal-backend.herokuapp.com/';

const httplink = createHttpLink({
  uri: baseURL + 'graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('food_token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  link: authLink.concat(httplink),
  cache: new InMemoryCache()
});

export default client;
