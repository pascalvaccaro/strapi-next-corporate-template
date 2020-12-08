import React from 'react';
import { Divider, Result } from 'antd';
import { ResultProps } from 'antd/lib/result';
import styled from 'styled-components';

import Button, { ButtonProps } from './button';
import Card, { CardProps } from './card';
import Raw from './raw';
import { getCssURLFor } from '../utils/url';

const Wrapper = styled.section<Pick<SectionProps, 'backgroundColor' | 'backgroundImage'>>`
  background-image: ${getCssURLFor('backgroundImage')};
  background-color: ${({backgroundColor}) => backgroundColor};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .ant-result-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .ant-result-icon {
    display: none;
  }
  .ant-result-title {
    font-size: 36px;
    font-weight: 500;
  }
  .ant-result-subtitle {
    font-size: 24px;
    width: fit-content;
    align-self: center;
    background-color: white;
    padding: 0.5rem 1rem;
  }
`;
const Grid = styled.div<{cards: CardProps[]; hasContent: boolean}>`
  display: grid;
  grid-template-areas: ${({cards, hasContent}) =>
    cards.length === 1 && hasContent ? `"content card-${cards[0].id}"` :
    cards.length > 1 && hasContent ? `"content"\n"${cards.map(({id}) => `card-${id}`).join(" ")}"` :
    cards.length > 0 && !hasContent ? `"${cards.map(({id}) => `card-${id}`).join(" ")}"` : 
    `"content"\n"card"`
  };
  grid-template-columns: ${({cards, hasContent}) =>
    cards.length === 1 && hasContent ? "1fr 1fr" : `repeat(${cards.length}, 1fr)`
  };
  grid-template-rows: ${({cards, hasContent}) =>
    cards.length > 1 && hasContent ? "1fr 1fr" : "1fr"
  };
  column-gap: 1rem;
  row-gap: 1rem;
`;
const Cell = styled.div<{area: string}>`
  grid-area: ${({area}) => area};
`;
const H1 = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
`


const Section: React.FC<SectionProps> = ({
  backgroundColor = 'transparent',
  backgroundImage,
  content,
  ctas = [],
  cards = [],
  title,
  ...props
}) => (
  <Wrapper backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
    <Result {...props}
      extra={ctas.length ? ctas.map((cta, i) => <Button key={i} {...cta} />) : null}
      title={backgroundImage ? title : <Divider orientation="center"><H1>{title}</H1></Divider>}
    >
      {!!content || cards.length > 0 ?
      <Grid cards={cards} hasContent={!!content}>
        {!!content && <Cell area="content"><Raw content={content} /></Cell>}
        {cards.length > 0 && cards.map(card => <Cell key={card.id} area={`card-${card.id}`}><Card {...card} /></Cell>)}
      </Grid> : null
      }
    </Result>
  </Wrapper>
);

export default Section;

export type SectionProps = ResultProps & {
  id: number;
  backgroundColor: string;
  backgroundImage?: {
    url: string;
  };
  content?: string;
  ctas?: ButtonProps[];
  cards?: CardProps[];
};

