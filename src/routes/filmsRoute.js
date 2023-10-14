import express from 'express';
import { getAllFilmsControllers, getAllFilmsTitleControllers } from '../controllers/films.js';

const filmesRoute = express.Router();

filmesRoute.get('/', getAllFilmsControllers)

filmesRoute.get('/title', getAllFilmsTitleControllers)

export default filmesRoute;