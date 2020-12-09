import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Skeleton } from 'antd';
import styled from 'styled-components';

import { FIND_PAGE, ALL_PAGES } from "../queries/pages";
import { initializeApollo } from '../hooks/apollo';
import { Section, SectionProps } from '../components';
import Raw from '../components/raw';
import { useRouter } from 'next/router';

const RawContent = styled.div``;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  > * {
    min-height: 33vh;
  }

  > section:first-child {
    height: 50vh;
  }
`;

const Page: React.FC<IPage> = ({ content, sections }) => {
  const router = useRouter();
  return (
    <Skeleton active loading={router.isFallback}>
      <Wrapper>
        {sections && sections.length
          ? sections.map(section => <Section key={section.id} {...section} />)
          : <Raw content={content} />
        }
      </Wrapper>
    </Skeleton>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.page || !params.page.length) {
    return {
      notFound: true,
    };
  }

  const client = initializeApollo(null);
  const [slug] = params.page as string[];
  const { data } = await client.query<{page: IPage}>({
    query: FIND_PAGE,
    variables: { slug },
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      ...data.page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo(null);
  const { data } = await client.query<{pages: IPage[]}>({ query: ALL_PAGES });
  const paths = data.pages.map(({ slug }) => ({ params: { page: [slug] }}));

  return {
    paths,
    fallback: true,
  };
};

export interface IPage {
  sections?: SectionProps[];
  content: string;
  title: string;
  id: number;
  slug: string;
}