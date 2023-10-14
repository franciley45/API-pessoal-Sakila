import express from 'express';
import { getAllFilmsActorsControllers, getAllFilmsControllers, getAllFilmsTitleControllers } from '../controllers/films.js';
import { getAllFilmsActorNameControllers } from '../controllers/customers.js';

const filmesRoute = express.Router();

filmesRoute.get('/', getAllFilmsControllers)
filmesRoute.get('/title', getAllFilmsTitleControllers)
filmesRoute.get('/actors', getAllFilmsActorsControllers)
filmesRoute.get('/actors/:name', getAllFilmsActorNameControllers)
export default filmesRoute;