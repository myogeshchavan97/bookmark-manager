const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const { API_URL } = require('./constants');
const fetch = require('cross-fetch');
require('dotenv').config();

const getClient = ({ method = 'POST' } = {}) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: API_URL,
      fetch,
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_GRAPHQL_SECRET_KEY}`
      },
      method
    }),
    cache: new InMemoryCache()
  });

  return client;
};

module.exports = { getClient };
