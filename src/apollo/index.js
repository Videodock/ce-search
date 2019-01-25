import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors, networkError);
    }),
    withClientState({
      defaults: {
        // @todo state
      },
      resolvers: {
        Mutation: {
          // @todo mutation resolvers
        },
      },
      cache,
    }),
    new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URL,
    }),
  ]),
  cache,
});

export default client;
