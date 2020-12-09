import { GetStaticProps } from 'next';

import Page, { IPage } from './[...page]';
import { initializeApollo } from '../hooks/apollo';
import { FIND_PAGE } from '../queries/pages';

export default Page;

export const getStaticProps: GetStaticProps<IPage> = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{page: IPage}>({
    query: FIND_PAGE,
    variables: { slug: 'home' }
  });

  return data && data.page ? {
    props: {
      ...data.page
    }
  } : {
    notFound: true,
  };
};
