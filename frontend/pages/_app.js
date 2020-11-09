import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import Query from '../components/query';
import withData from '../utils/apollo';
import { useStore } from '../store';
import '../styles/globals.css';

const App = ({ Component, pageProps, apollo, router }) => {
  const store = useStore(pageProps.initialReduxState);
  const url = router.pathname === '/' ? '/home' : router.pathname;

  return (
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <Head>
          <title>Pascal Vaccaro personal website</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        </Head>
        <Query url={url}>
          {(({ data }) => <Component {...pageProps} {...data} />)}
        </Query>
      </Provider>
    </ApolloProvider>
  )
};

export default withData(App);
