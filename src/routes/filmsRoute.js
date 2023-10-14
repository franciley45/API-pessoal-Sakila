import express from 'express';
import { getAllFilmsControllers } from '../controllers/films.js';

const filmesRoute = express.Router();

filmesRoute.get('/', getAllFilmsControllers)

export default filmesRoute;