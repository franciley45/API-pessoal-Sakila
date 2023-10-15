import express from 'express';
import { getAllFilmsActorNameControllers, getAllFilmsActorsControllers, getAllFilmsControllers, getAllFilmsIdControllers, getAllFilmsTitleControllers } from '../controllers/films.js';

const filmesRoute = express.Router();
filmesRoute.get('/', getAllFilmsControllers)
filmesRoute.get('/:id', getAllFilmsIdControllers)
filmesRoute.get('/title', getAllFilmsTitleControllers)
filmesRoute.get('/actors', getAllFilmsActorsControllers)
filmesRoute.get('/actors/:name', getAllFilmsActorNameControllers)
export default filmesRoute;