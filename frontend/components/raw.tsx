import React, {  } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism } from 'react-syntax-highlighter';
import parse, { domToReact, attributesToProps } from 'html-react-parser';
import { DomElement } from 'htmlparser2';
import { Image, Typography, List } from 'antd';
import styled from 'styled-components';

import { getAssetURL } from '../utils/url';
import Link from 'next/link';

const tagMap = new Map<string, React.FC<any>>();
tagMap.set("p", Typography.Paragraph);
tagMap.set("text", Typography.Text);
tagMap.set("img", Image);

const titles = ['h2', 'h3', 'h4'];

const replace = ({ name, attribs, children }: DomElement) => {
  const props = attributesToProps(attribs) || {};
  if (titles.includes(name)) {
    const level = Number(name[1]) as 2 | 3 | 4;
    return <Typography.Title level={level} {...props}>{domToReact(children, { replace })}</Typography.Title>
  }

  switch (name) {
    case 'a':
      return <Typography.Link target="_blank" rel="noopener noreferrer" {...props}>{domToReact(children, { replace })}</Typography.Link>;
    case 'blockquote':
      return <blockquote>{domToReact(children)}</blockquote>;
    case 'strong':
      return <Typography.Text strong>{domToReact(children, { replace })}</Typography.Text>
    default:
      if (tagMap.has(name)) {
        const Component = tagMap.get(name) as React.FC;
        return <Component {...props}>{domToReact(children, { replace })}</Component>
      }
  }
};

const renderers = {
  code: ({ language, value }: { language: string, value: string}) => <Prism language={language} children={value} />,
};

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const RawParser: React.FC<{ content: string }> = ({ content = '' }) => (
  <Wrapper>
    {/* {parse(content, { replace })} */}
    <ReactMarkdown
      plugins={[gfm]}
      linkTarget={(url: string) => url.startsWith('/') ? '' : '_blank'}
      transformImageUri={getAssetURL}
      renderers={renderers}
      allowDangerousHtml
      children={content}
    />
  </Wrapper>
);

export default RawParser;