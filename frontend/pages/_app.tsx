import React from 'react';
import type { AppProps } from 'next/app'; 
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider as ReduxProvider } from 'react-redux';
import { Layout } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { useApollo } from '../hooks/apollo';
import { useStore } from '../hooks/store';
import { IPage } from './[...page]';

import '../styles/globals.css';
import Nav from '../containers/nav';

const STRIP_HEIGHT = {height: 64} as const;

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);
  const client = useApollo(pageProps.initialApolloState);
  const { title } = pageProps || Object.values<IPage>(pageProps.initialApolloState || {})
    .find(({ title }) => !!title) || { title : undefined };

  return (
    <ReduxProvider store={store}>
      {/* @ts-ignore */}
      <ApolloProvider client={client}>
        <Head>
          {title && <title>{title}</title>}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Layout.Header style={STRIP_HEIGHT}><Nav /></Layout.Header>
          <Layout.Content style={{minHeight: `calc(100vh - ${STRIP_HEIGHT.height * 2}px`}}>
            <Component {...pageProps} />
          </Layout.Content>
          <Layout.Footer style={STRIP_HEIGHT}>
            Made with <HeartTwoTone twoToneColor="#ff4d4f" size={16} /> with Strapi, Next.js and Ant-Design
          </Layout.Footer>
        </Layout>
      </ApolloProvider>
    </ReduxProvider>
  )
};

export default App;
