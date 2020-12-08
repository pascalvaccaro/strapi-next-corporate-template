import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import withApollo, { initApollo, WithApolloProps } from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';

import { getStrapiURL } from '../utils/url';

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: getStrapiURL('/graphql'),
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}

export const initializeApollo = (initialState: any) => initApollo(createApolloClient, { initialState });

export const useApollo = (initialState: any) => 
  useMemo(() => initializeApollo(initialState), [initializeApollo, initialState]);

export default withApollo<NormalizedCacheObject>(({ initialState }) =>
  useApollo(initialState));

export interface ApolloProps extends WithApolloProps<NormalizedCacheObject> {}