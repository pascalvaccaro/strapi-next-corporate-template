import { Section, CardGroup } from '../components';


const Home = ({ jumbotron, services, blog, about }) => (
  <>
    <Section {...jumbotron} />
    <CardGroup content={services} />
    <Section {...blog} />
    <Section {...about} />
  </>
);

export default Home;