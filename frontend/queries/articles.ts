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
      avatar
        url
      
      email
    }
    created_at
    updated_at
  }
`;

export const GET_ARTICLES = gql`
  query Articles {
    articles(publicationState: LIVE) {
      ...ArticleFragment
    }
  }
  ${ArticleFragment}
`;

export const ALL_ARTICLES = gql`
  query Articles {
    articles(publicationState: LIVE) {
      id
    }
  }
`;

export const GET_ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      ...ArticleFragment
    }
  }
  ${ArticleFragment}
`;