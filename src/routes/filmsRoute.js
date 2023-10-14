import express from 'express';
import { getAllFilmsActorsControllers, getAllFilmsControllers, getAllFilmsTitleControllers } from '../controllers/films.js';

const filmesRoute = express.Router();

filmesRoute.get('/', getAllFilmsControllers)
filmesRoute.get('/title', getAllFilmsTitleControllers)
filmesRoute.get('/actors', getAllFilmsActorsControllers)

export default filmesRoute;