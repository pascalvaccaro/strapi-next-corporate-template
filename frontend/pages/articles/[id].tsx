import { GetStaticProps } from 'next';

import { initializeApollo } from '../../hooks/apollo';
import { GET_ARTICLE } from '../../queries/articles';

export interface ArticleProps {
  id: string
  title: string;
  content: string;
  cover: {
    url: string;
  }
  categories: {
    id: number;
    name: string;
  }[];
  author: {
    username: string;
    avatar: {
      url: string;
    }
    email: string;
  }
  created_at: Date;
  updated_at: Date;
}

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