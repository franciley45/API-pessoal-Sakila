import cors from 'cors';
import express from 'express';
import 'dotenv/config'
import filmesRoute from './routes/filmsRoute.js';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/films', filmesRoute)

export default app;
