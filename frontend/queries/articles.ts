import { gql } from '@apollo/client';

const ArticleFragment = gql`
  fragment ArticleFragment on Article {
    id
    title
    content
    cover {
      url
    }
    categories {
      id
      name
    }  
    author {
      username
      avatar {
        url
      }
      email
    }
    created_at
    updated_at
  }
`;

export const GET_ARTICLES = gql`
  query GetArticles {
    articles(publicationState: LIVE) {
      ...ArticleFragment
    }
  }
  ${ArticleFragment}
`;

export const ALL_ARTICLES = gql`
  query AllArticles {
    articles(publicationState: LIVE) {
      id
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      ...ArticleFragment
    }
  }
  ${ArticleFragment}
`;