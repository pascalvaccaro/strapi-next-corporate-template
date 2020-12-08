import { GetStaticPaths, GetStaticProps } from 'next';

import { initializeApollo } from '../../hooks/apollo';
import { ALL_ARTICLES, GET_ARTICLE } from '../../queries/articles';
import { Article as ArticleProps } from '../../typings';

const Article: React.FC<ArticleProps> = () => (
  <>
  </>
);

export default Article;

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
  if (!params || !params.id) return { notFound: true };
  const { id } = params;
  const client = initializeApollo(null);
  const { data } = await client.query<{article: ArticleProps}>({
    query: GET_ARTICLE,
    variables: { id }
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      ...data.article,
    }

  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{articles: ArticleProps[]}>({
    query: ALL_ARTICLES
  });
  const paths = data.articles.map(({ id }) => ({ params: { id }}));

  return {
    paths,
    fallback: false
  };
}