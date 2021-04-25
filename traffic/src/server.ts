import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import searchController from './controllers/search';
import resultController from './controllers/results';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use('/search', searchController);
app.use('/results', resultController);

app.listen(port, () => console.log(`Traffic service running in port ${port}`));
