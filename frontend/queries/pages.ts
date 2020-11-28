import { gql } from '@apollo/client';
import { SectionFragment } from './components';

export const FIND_PAGE = gql`
  query Page($slug: String!) {
    pageBySlug(slug: $slug) {
      id
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
  query Pages {
    pages(publicationState: LIVE) {
      slug
    }
  }
`;