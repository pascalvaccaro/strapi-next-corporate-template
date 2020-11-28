import React, { useMemo } from 'react';
import Link from 'next/link';
import { Avatar, Card as AntdCard } from 'antd';
import { CardProps as AntdCardProps } from 'antd/lib/card';

import { getAssetURL } from '../utils/url';

const Card = ({
  avatar,
  subTitle,
  description,
  cover,
  actions = [],
  href,
  ...props
}: CardProps) => {
  const image = useMemo(() => cover && cover.url
    ? <img alt={cover.alternativeText || cover.name} src={getAssetURL(cover)} />
    : null,
  [cover]);

  const meta = useMemo(() => subTitle || description || avatar
    ? <AntdCard.Meta avatar={avatar && <Avatar src={getAssetURL(avatar)} />} title={subTitle} description={description} />
    : null,
  [subTitle, description, avatar]);

  return (
    <AntdCard {...props} style={{maxWidth: 500}} cover={image} extra={href && <Link href={href}>More</Link>}>
      {meta}
    </AntdCard>
  )
};

export default Card;

export type CardProps = Omit<AntdCardProps, 'cover'> & {
  avatar?: { url: string; };
  subTitle?: string;
  description?: string;
  cover?: {
    alternativeText?: string;
    name: string;
    url: string;
  }
  href?: string;
}
