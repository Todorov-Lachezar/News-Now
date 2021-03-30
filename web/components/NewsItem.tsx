import React from 'react';
import { Pane, Heading, Paragraph, Small } from 'evergreen-ui';

const IMAGE_URL_DEMO =
  'https://images.unsplash.com/photo-1519995451813-39e29e054914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80';

const NewsItem: React.FC = () => (
  <Pane width={300} background="tint1" borderRadius={5} elevation={1}>
    <Pane
      width={300}
      height={200}
      backgroundColor="red"
      borderTopLeftRadius={5}
      borderTopRightRadius={5}
      backgroundSize="cover"
      background={`url(${IMAGE_URL_DEMO}) no-repeat center`}
    />
    <Pane width="100%" padding={8}>
      <Paragraph>
        <Small>Yahoo Finance · 3 hours ego</Small>
      </Paragraph>
      <Heading marginTop={4} marginBottom={10}>
        Bitcoin Breaks Out, Near $58K, After Visa Adds Support for Stablecoin
        USDC
      </Heading>
      <Paragraph>
        Cryptocurrency traders might be shifting their primary focus back to
        bitcoin after several weeks focused on ether...
      </Paragraph>
    </Pane>
  </Pane>
);

export default NewsItem;
