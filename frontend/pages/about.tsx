import { GetStaticProps } from 'next';
import { fetchPage } from "../utils/fetch";

const About = () => (
    <div>About me</div>
);

export default About;

export const getStaticProps: GetStaticProps = async () => ({
    props: await fetchPage('/about'),
});