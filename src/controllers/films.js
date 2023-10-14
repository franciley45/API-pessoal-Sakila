import { getAllFilms, getAllFilmsActors, getAllFilmsTitle } from "../models/films.js";

const status = 200;

export async function getAllFilmsControllers(_req, res) {
    const result = await getAllFilms()
    return res.status(status).json(result)
}

export async function getAllFilmsTitleControllers(_req, res) {
    const result = await getAllFilmsTitle()
    return res.status(status).json(result)
}

export async function getAllFilmsActorsControllers(_req, res) {
    const result = await getAllFilmsActors()
    return res.status(status).json(result)
}