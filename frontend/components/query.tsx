import React from 'react';
import { DocumentNode, useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';

import useFetch from '../hooks/fetch';

type QueryProps = {
    children: (p: {data: any}) => JSX.Element;
    query?: DocumentNode;
    id?: string;
    url?: string;
    params?: URLSearchParams;
}

const Query = ({ children, query, id, url, params }: QueryProps) => {
    const { data, loading, error } = query
        ? useQuery(query, { variables: { id }})
        : useFetch(url, params);

    if (loading) return <Spin tip="Loading..." />;

    if (error) return <p>Error: {JSON.stringify(error, null, 2)}</p>;

    return children({ data });
};

export default Query;