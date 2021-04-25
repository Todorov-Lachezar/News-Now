import axios from 'axios';

const API_URL = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&sortBy=publishedAt`;

export const getNews = async (keywords: string[]): Promise<NewsResponse> => {
  if (!keywords) {
    throw new Error('At least one keyword is required');
  }

  const query = encodeURI(keywords.join(' '));

  console.log(query);
  const { data } = await axios.get<NewsResponse>(`${API_URL}&q=${query}`);

  return data;
};

export interface NewsResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
  code?: string;
  message?: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id?: string;
  name: string;
}
