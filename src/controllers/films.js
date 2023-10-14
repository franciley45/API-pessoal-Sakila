import { getAllFilms } from "../models/films.js";

const status = 200;

export async function getAllFilmsControllers(_req, res) {
const result = await getAllFilms()
 return res.status(status).json(result)
}