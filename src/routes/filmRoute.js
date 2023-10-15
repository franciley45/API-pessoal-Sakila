import express from 'express';
import { getAllFilmsIdControllers } from '../controllers/films.js';
const filmRoute = express.Router();


filmRoute.get('/:id', getAllFilmsIdControllers)


export default filmRoute;