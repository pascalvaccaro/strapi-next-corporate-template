import React, { useMemo } from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { CardProps } from 'antd/lib/card';

import useDispatch from '../hooks/dispatch';
import { isEmpty } from '../utils/object';

const domain = process.env.ASSET_DOMAIN || 'http://localhost:1337';

const renderCardAction = dispatch =>
    ({ icon: IconComponent, ...action }) =>
        <IconComponent key={action.id} onClick={dispatch(action)} />;

type SingleCardProps = Omit<CardProps, 'cover'> & {
    Meta?: {
        avatar: { url: string; };
        title: string;
        description: string;
    };
    cover?: {
        alternativeText?: string;
        name: string;
        url: string;
    }
}

const SingleCard = ({
    Meta,
    cover,
    actions = [],
    ...props
}: SingleCardProps) => {
    const dispatch = useDispatch();
    const image = useMemo(() => cover && cover.url
        ? <img alt={cover.alternativeText || cover.name} src={domain + cover.url} />
        : null,
    [cover]);
    const meta = useMemo(() => !isEmpty(Meta) 
        ? <Card.Meta avatar={<Avatar src={domain + Meta.avatar.url}/>} title={Meta.title} description={Meta.description} />
        : null,
    [Meta]);

    return (
        <Card {...props} cover={image} actions={actions.map(renderCardAction(dispatch))}>
            {meta}
        </Card>
    )
};

export const CardGroup = ({content = []}: { content: Array<SingleCardProps>}) => (
    <>
    {content.length
    ? <Row gutter={16}>
        {content.map(card => <Col span={Math.min(8, Math.floor(24 / content.length))} key={card.id}><SingleCard {...card} /></Col>)}
      </Row>
    : null}
    </>
);

export default SingleCard;