import { GetStaticProps } from 'next';

import { Button } from '../../components';
import { fetchPage } from '../../utils/fetch';

const Articles = ({ articles }) => (
    <>
        <Button label={'Back home'} onClick={{type: 'NAVIGATE_TO', payload: {page: '/'}}} />
        <pre>
            {JSON.stringify(articles, null, 2)}
        </pre>
    </>
);

export default Articles;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        articles: await fetchPage('/articles'),
    }
});