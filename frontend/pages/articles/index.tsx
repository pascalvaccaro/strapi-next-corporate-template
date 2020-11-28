import { GetStaticPaths, GetStaticProps } from 'next';

import { ArticleProps } from './[id]';
import { initializeApollo } from '../../hooks/apollo';
import { ALL_ARTICLES, GET_ARTICLES } from '../../queries/articles';

const Articles: React.FC<{articles: ArticleProps[]}> = ({ articles }) => (
  <>

  </>
);

export default Articles;

export const getStaticProps: GetStaticProps<{articles: ArticleProps[]}> = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{articles: ArticleProps[]}>({
    query: GET_ARTICLES
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      ...data,
    }
  }
};


export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{articles: { id: number }[]}>({
    query: ALL_ARTICLES
  });
  const paths = data.articles.map(article => ({ params: { id: [String(article.id)] }}));

  return {
    paths,
    fallback: false
  };
}