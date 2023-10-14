import connect from "./db/connect.js"

export async function getAllCustomers() {
    const sql = `SELECT first_name, last_name, address
    FROM customer c, address a
    WHERE active = 1 AND c.address_id = a.address_id;`
    const [result] = await (await connect()).query(sql)
    return result
  }