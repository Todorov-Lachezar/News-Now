import React from 'react';
import { Pane } from 'evergreen-ui';
import Container from '../components/container';
import Header from '../components/header';
import NewsItem from '../components/NewsItem';

const ResultsPage: React.FC = () => (
  <>
    <Container>
      <Header />
    </Container>
    <Pane marginTop={40}>
      <Container maxWidth={1400}>
        <NewsItem />
      </Container>
    </Pane>
  </>
);

export default ResultsPage;
