import { gql } from '@apollo/client';

export const MediaFragment = gql`
  fragment MediaFragment on UploadFile {
    id
    name
    alternativeText
    caption
    width
    height
    size
    url
  }
`;
export const ButtonFragment = gql`
  fragment ButtonFragment on ComponentGeneralButton {
    id
    disabled
    ghost
    icon
    shape
    size
    type
    block
    label
    page {
      slug
    }
    article {
      id
    }
    href
  }
`;
export const CardFragment = gql`
  fragment CardFragment on Article {
    id
    title
    subTitle
    description
    cover {
      ...MediaFragment
    }
    author {
      avatar {
        ...MediaFragment
      }
    }
  }
  ${MediaFragment}
`;
export const SectionFragment = gql`
  fragment SectionFragment on ComponentGeneralSection {
    id
    title
    subTitle
    backgroundImage {
      ...MediaFragment
    }
    # backgroundColor
    ctas {
      ...ButtonFragment
    }
    content
    cards {
      ...CardFragment
    }
  }

  ${ButtonFragment}
  ${CardFragment}
`;