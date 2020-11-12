import React from 'react';
import type { AppProps as NextAppProps } from 'next/app'; 
import Head from 'next/head';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import withData from '../hooks/apollo';
import { useStore } from '../store';
import '../styles/globals.css';

type AppProps = NextAppProps & {
  apollo: ApolloClient<InMemoryCache>;
}

const App = ({ Component, pageProps, apollo }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <Head>
          <title>Pascal Vaccaro personal website</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
};

export default withData(App);
