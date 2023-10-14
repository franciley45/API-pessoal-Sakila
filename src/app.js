import cors from 'cors';
import express from 'express';
import 'dotenv/config'
import filmesRoute from './routes/filmsRoute.js';
import customerRoute from './routes/customersRoute.js';

const app = express();
app.use(express.json());
app.use(cors())
app.use('/films', filmesRoute)
app.use('/customer', customerRoute)

export default app;
