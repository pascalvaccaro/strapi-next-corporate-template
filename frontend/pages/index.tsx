import { GetStaticProps } from 'next';

import { Section, CardGroup } from '../components';
import { fetchPage } from '../utils/fetch';

const Home = ({ jumbotron, services, blog, about }) => (
  <>
    <Section {...jumbotron} />
    <CardGroup content={services} />
    <Section {...blog} />
    <Section {...about} />
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => ({
  props: await fetchPage('/home'),
});