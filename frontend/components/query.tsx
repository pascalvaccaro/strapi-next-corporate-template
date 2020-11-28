import React from 'react';
import { ApolloError, DocumentNode, OperationVariables, useQuery } from '@apollo/react-hooks';
import { GraphQLError } from 'graphql';
import NextError from 'next/error';
import { Spin, Typography } from 'antd';

import { useFetch, StrapiError } from '../hooks/fetch';
import { isEmpty } from '../utils/object';

type QueryProps<T> = {
  children: (data: T) => JSX.Element;
  query?: DocumentNode;
  variables?: OperationVariables;
  url?: string;
  params?: URLSearchParams;
}

const Error: React.FC<StrapiError | GraphQLError> = (error) => (
  <Typography.Paragraph key={error.message}>
    <Typography.Title>{error.name}</Typography.Title>
    <Typography.Text>{error.message}</Typography.Text>
    {process.env.NODE_ENV !== 'production' && <Typography.Text>{error.stack}</Typography.Text>}
  </Typography.Paragraph>
);

function Query<T>({ children, query, variables, url, params }: QueryProps<T>) {
  try {
    const { data, loading, error } = query
      ? useQuery(query, { variables })
      : useFetch(url as string, params);
  
    if (loading) return <Spin tip="Loading..." />;
    if (error instanceof ApolloError) return <NextError statusCode={500} title={error.name} children={error.graphQLErrors.map((error, i) => <Error key={i} {...error} />)} />;
    if (error) return <NextError statusCode={error.statusCode} title={error.name} children={<Error {...error} />} />;
    if (isEmpty(data)) return <NextError statusCode={404} />;
  
    return children(data);
  } catch (error) {
    return <NextError statusCode={error.statusCode} title={error.name || "Erreur"} children={<Error {...error} />} />;
  }
};

export default Query;