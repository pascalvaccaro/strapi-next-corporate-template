import { useState, useEffect } from 'react';
const domain = process.env.API_URL || 'http://localhost:1337';

const useFetch = (initialUrl, initialParams = {}, skip = false) => {
    const [url, setUrl] = useState(initialUrl);
    const [params, setParams] = useState(initialParams);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [refetch, setRefetch] = useState(0);

    const queryString = Object.entries(params)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&');

    const refresh = () => setRefetch((previous) => previous + 1);

    useEffect(() => {
        const fetchData = async () => {
            if (skip) return;
            setLoading(true);
            try {
                const response = await fetch(`${domain}${url}?${queryString}`);
                const result = await response.json();
                if (response.ok) {
                    setData(result);
                } else {
                    setError(result);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, params, refetch]);

    return { data, loading, error, setUrl, setParams, refresh };
};

export default useFetch;