import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import merge from 'deepmerge';
import { useMemo } from 'react';

const GRAPHQL_URL = process.env.API_URL || 'http://localhost:1337';

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: new URL("/graphql", GRAPHQL_URL).toString(),
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
let apolloCient: ReturnType<typeof createApolloClient>;

export const initializeApollo = (initialState: any) => {
  const _apolloClient = apolloCient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloCient) apolloCient = _apolloClient;

  return _apolloClient;
}

export const useApollo = (initialState: any) => 
  useMemo(() => initializeApollo(initialState), [initialState]);

export default withApollo(({ initialState }) =>
  useApollo(initialState));