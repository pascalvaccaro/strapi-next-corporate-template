const ASSET_URL = process.env.ASSET_URL || 'http://localhost:1337';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

type URLObject = { url: string };

const getURL = (domain: string = '/') => (uri: URLObject | string | undefined) => 
  typeof uri === 'string'
    ? new URL(uri, domain).toString()
    : typeof uri === 'object' && uri.url 
      ? new URL(uri.url, domain).toString()
      : '';

export const getAssetURL = getURL(ASSET_URL);
export const getStrapiURL = getURL(STRAPI_URL);

const getCssURL = (uri: URLObject | string) => `url(${getAssetURL(uri)})`;

export const getCssURLFor = (propName: string) => (props: any) => props[propName] ? getCssURL(props[propName]) : '';