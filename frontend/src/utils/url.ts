const ASSET_URL = process.env.ASSET_URL || 'http://localhost:1337';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

type URLObject = { url: string };

const getURL = (domain: string = window.origin, prefix = '') => (uri: URLObject | string | undefined) => {
  const url = (typeof uri === 'string' && uri) || (typeof uri === 'object' && uri !== null && uri.url) || '';
  return url.startsWith('http') ? url
    : url.startsWith("/") ? new URL(prefix + url, domain).toString()
    : new URL(`${prefix}/${url}`, domain).toString();
};

export const getAssetURL = getURL(ASSET_URL);
export const getStrapiURL = getURL(STRAPI_URL);

const getCssURL = (uri: URLObject | string) => `url(${getAssetURL(uri)})`;

export const getCssURLFor = (propName: string) => (props: any) => props[propName] ? getCssURL(props[propName]) : '';

export const sanitizeQuery = (value: string | string[]) => {
  if (typeof value === 'string') return value;
  return value && value[0] ? value[0] : '';
};
