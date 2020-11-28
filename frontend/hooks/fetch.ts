import { useState, useEffect } from 'react';
import { getStrapiURL } from '../utils/url';

export const useFetch = <T>(
  initialUrl: string,
  initialParams = {},
  skip = false
) => {
  const [url, setUrl] = useState(initialUrl);
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<StrapiError>();
  const [refetch, setRefetch] = useState(0);

  const queryString = Object.entries(params)
    .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value as string))
    .join('&');

  const refresh = () => setRefetch((previous) => previous + 1);

  useEffect(() => {
    const fetchData = async () => {
      if (skip) return;
      setLoading(true);
      try {
        const response = await fetch(`${getStrapiURL(url)}?${queryString}`);
        const result: unknown = await response.json();
        if (response.ok) {
          setData(result as T);
        } else {
          setError(result as StrapiError);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, params, refetch]);

  return { data, loading, error, setUrl, setParams, refresh };
};

export interface StrapiError extends Error {
  statusCode: number;
  error: string;
  message: string;
}