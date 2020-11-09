import React from 'react';
import { Row, Col } from 'antd';

import Button from './button';

const domain = process.env.ASSET_DOMAIN || 'http://localhost:1337';

const Section = ({
    backgroundColor,
    backgroundImage,
    content,
    ctas = []
}) => {
    const sectionStyle = backgroundImage && backgroundImage.url
        ? { backgroundImage: `url(${domain + backgroundImage.url})` }
        : { backgroundColor };
    const ctaSpan = ctas.length ? Math.ceil(24 / ctas.length) : 0;

    return (
        <section style={sectionStyle}>
            <Row><Col span={24} dangerouslySetInnerHTML={{__html: content}} /></Row>
            {ctas.length > 0
            ? <Row>
                {ctas.map(cta => <Col key={cta.id} span={ctaSpan}><Button {...cta} /></Col>)}
            </Row>
            : null}
        </section>
    );
};

export default Section;