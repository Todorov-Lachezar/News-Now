import React from 'react';
import { Pane } from 'evergreen-ui';
import { SpringGrid, layout, measureItems } from 'react-stonecutter';
import Container from '../components/container';
import Header from '../components/header';
import NewsItem from '../components/NewsItem';
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';

const DEMO_NEWS = [
  {
    title:
      'Bitcoin Breaks Out, Near $58K, After Visa Adds Support for Stablecoin USDC',
    description:
      'Cryptocurrency traders might be shifting their primary focus back to sbitcoin after several weeks focused on ether...',
    image:
      'https://images.unsplash.com/photo-1519995451813-39e29e054914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
  },
  {
    title: 'What happens when walmart buys $1 billion of bitcoin?',
    description:
      "Let me make this clear: Walmart has not announced a purchase of $1 billion worth of bitcoin. But it will and let me tell you what's going to happen when it does. MicroStrategy, Square and Coinbase are multimillion-dollar companies traded on NASDAQ with big bitcoin bags, but the everyday American could care less",
    image:
      'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
  },
  {
    title: 'BNY Mellon Weighs Controversial Bitcoin Valuation Model',
    description:
      "BNY Mellon has taken on the difficult task of evaluating different methods of valuing Bitcoin in a March investment report, And in doing so, it's spotlighted a controversial model that—if correct—would see Bitcoin’s price hit $100,000 to $288,000 this year.",
    image:
      'https://images.unsplash.com/photo-1616402631152-778ab353d963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80'
  }
];

const Grid = measureItems(SpringGrid);

const ResultsPage: React.FC = () => (
  <Pane
    width="100%"
    minHeight="100vh"
    maxHeight="100%"
    paddingY={20}
    background="blueTint"
  >
    <Container>
      <Header />
    </Container>
    <Pane display="flex" width="100%" justifyContent="center" marginTop={40}>
      <Grid
        columns={4}
        columnWidth={300}
        gutterWidth={20}
        gutterHeight={20}
        layout={layout.pinterest}
        duration={800}
        easing="ease-out"
      >
        {[...Array(30).keys()].map((i) => (
          <div key={`news-${i}`}>
            <NewsItem {...DEMO_NEWS[i % 3]} />
          </div>
        ))}
      </Grid>
    </Pane>
  </Pane>
);

export default ResultsPage;
