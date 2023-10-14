import connect from "./db/connect.js";

export async function getAllFilms() {
    const sql = `SELECT * FROM film;`
    const [result] = await (await connect()).query(sql)
    return result
  }
