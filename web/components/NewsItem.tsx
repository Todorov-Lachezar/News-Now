import React from 'react';
import { Pane, Heading, Paragraph, Small } from 'evergreen-ui';

type NewsItemProps = {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  url: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  image,
  author,
  publishedAt,
  url
}) => (
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
        <Small>
          {author} · {new Date(publishedAt).toLocaleDateString()}
        </Small>
      </Paragraph>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Heading marginTop={4} marginBottom={10}>
          {title}
        </Heading>
      </a>
      <Paragraph>{description}</Paragraph>
    </Pane>
  </Pane>
);

export default NewsItem;
