import { gql } from '@apollo/client';
import { SectionFragment } from './components';

export const FIND_PAGE = gql`
  query FindPage($slug: String!) {
    page: pageBySlug(slug: $slug) {
      id
      slug
      title
      content,
      sections {
        ...SectionFragment
      }
    }
  }
  ${SectionFragment}
`;


export const ALL_PAGES = gql`
  query AllPages {
    pages(publicationState: LIVE) {
      slug
    }
  }
`;