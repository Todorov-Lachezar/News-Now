import React from 'react';
import { Pane, Heading, Paragraph, Small } from 'evergreen-ui';

type NewsItemProps = {
  title: string;
  description: string;
  image: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, description, image }) => (
  <Pane width={300} background="tint1" borderRadius={5} elevation={1}>
    <Pane
      width={300}
      height={200}
      backgroundColor="red"
      borderTopLeftRadius={5}
      borderTopRightRadius={5}
      backgroundSize="cover"
      background={`url(${image}) no-repeat center`}
    />
    <Pane width="100%" padding={8}>
      <Paragraph>
        <Small>Yahoo Finance · 3 hours ego</Small>
      </Paragraph>
      <Heading marginTop={4} marginBottom={10}>
        {title}
      </Heading>
      <Paragraph>{description}</Paragraph>
    </Pane>
  </Pane>
);

export default NewsItem;
