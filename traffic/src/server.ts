import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import searchController from './controllers/search';

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use('/search', searchController);

app.listen(port, () => console.log(`Traffic service running in port ${port}`));
