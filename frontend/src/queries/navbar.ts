import { gql } from '@apollo/client';

export const GET_NAV = gql`
  query NavBar {
    navBar(publicationState: LIVE) {
      links {
        href, label, icon
      }
      social {
        href, label, icon
      }
    }
  }
`;