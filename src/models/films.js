import connect from "./db/connect.js";

export async function getAllFilms() {
    const sql = `SELECT * FROM film;`
    const [result] = await (await connect()).query(sql)
    return result
  }
  export async function getAllFilmsId(id) {
    const sql = `SELECT * FROM film WHERE film_id =?;`
    const [result] = await (await connect()).query(sql,[id])
    return result
  }

  export async function getAllFilmsTitle() {
    const sql = `SELECT title FROM film;`
    const [result] = await (await connect()).query(sql)
    return result
  }
  export async function getAllFilmsActors() {
    const sql = `SELECT f.title, a.first_name, a.last_name
    FROM film f, film_actor fa, actor a
    WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id;`
    const [result] = await (await connect()).query(sql)
    return result
  }
  export async function getAllFilmsActorName(name) {
    const sql = `
    SELECT f.title, a.first_name, a.last_name
    FROM film f, film_actor fa, actor a
    WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id
    AND a.first_name =?;`
    const [result] = await (await connect()).query(sql,[name])
    return result
  }