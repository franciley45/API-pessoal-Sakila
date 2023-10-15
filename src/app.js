import cors from 'cors';
import express from 'express';
import 'dotenv/config'
import filmesRoute from './routes/filmsRoute.js';
import customersRoute from './routes/customersRoute.js';
import customerRoute from './routes/customerRoute.js';

const app = express();
app.use(express.json());
app.use(cors())
app.use('/films', filmesRoute)
app.use('/customer', customerRoute)
app.use('/customers', customersRoute)

export default app;
