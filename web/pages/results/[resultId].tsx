import React from 'react';
import useFetch from 'use-http';
import { useRouter } from 'next/router';
import { Heading, Pane, Spinner, Text } from 'evergreen-ui';
import { SpringGrid, layout, measureItems } from 'react-stonecutter';
import Container from '../../components/container';
import Header from '../../components/header';
import NewsItem from '../../components/NewsItem';

const Grid = measureItems(SpringGrid);

const Loading: React.FC = () => (
  <Pane
    width="100%"
    minHeight="100vh"
    maxHeight="100%"
    background="blueTint"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Spinner />
    <Text>Loading...</Text>
  </Pane>
);

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { resultId } = router.query;

  if (!resultId) {
    return <Loading />;
  }

  const { loading, error, data } = useFetch<NewsResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/results/${resultId}`,
    {
      retries: 200,
      retryDelay: 3000,
      retryOn: [404]
    },
    [resultId]
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Pane
        width="100%"
        minHeight="100vh"
        maxHeight="100%"
        background="blueTint"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Opposie Whoopsie 🤦‍♂️</Heading>
        <Text>Something is broken. Please try again</Text>
      </Pane>
    );
  }

  console.log(data);

  return (
    <Pane
      width="100%"
      minHeight="100vh"
      maxHeight="100%"
      paddingY={20}
      background="blueTint"
    >
      <Container>
        <Header transcript={data.transcript} />
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
          {data.articles.map((article, index) => (
            <div key={`${article.title}-${index}`}>
              <NewsItem
                title={article.title}
                description={article.description}
                image={article.urlToImage}
                author={article.source.name}
                publishedAt={article.publishedAt}
                url={article.url}
              />
            </div>
          ))}
        </Grid>
      </Pane>
    </Pane>
  );
};

interface NewsResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
  code?: string;
  message?: string;
  transcript: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id?: string;
  name: string;
}

export default ResultsPage;
