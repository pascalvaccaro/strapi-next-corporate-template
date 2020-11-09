import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = process.env.API_URL || 'http://localhost:1337';
const link = createHttpLink({
    fetch,
    url: GRAPHQL_URL + "/graphql",
});

export default withApollo(({ initialState }) => 
    new ApolloClient({
        link,
        cache: new InMemoryCache().restore(initialState || {}),
    })
);