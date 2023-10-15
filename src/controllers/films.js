import { getAllFilms, getAllFilmsActorName, getAllFilmsActors, getAllFilmsId, getAllFilmsTitle } from "../models/films.js";

const status = 200;

export async function getAllFilmsControllers(_req, res) {
    const result = await getAllFilms()
    return res.status(status).json(result)
}

export async function getAllFilmsIdControllers(req, res) {
    const { id } = req.params
    const result = await getAllFilmsId(id)
    if(result.length === 0 ) return res.status(400).json({message: 'id not found'})
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

export async function getAllFilmsActorNameControllers(req, res) {
    const { name }=  req.params
    const result = await getAllFilmsActorName(name)
    if(result.length === 0 ) return res.status(400).json({message: 'actor not found'})
    return res.status(status).json(result)
}