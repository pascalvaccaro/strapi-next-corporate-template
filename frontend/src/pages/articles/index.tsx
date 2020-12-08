import { GetStaticProps } from 'next';

import { initializeApollo } from '../../hooks/apollo';
import { GET_ARTICLES } from '../../queries/articles';
import { Article } from '../../typings';

const Articles: React.FC<{articles: Article[]}> = ({ }) => (
  <>

  </>
);

export default Articles;

export const getStaticProps: GetStaticProps<{articles: Article[]}> = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{articles: Article[]}>({
    query: GET_ARTICLES
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      ...data,
    }
  }
};

