import connect from "./db/connect.js"

export async function getAllCustomers() {
    const sql = `SELECT first_name, last_name, address
    FROM customer c, address a
    WHERE active = 1 AND c.address_id = a.address_id;`
    const [result] = await (await connect()).query(sql)
    return result
}
export async function getAllCustomersInactive() {
    const sql = `SELECT *
    FROM customer
    WHERE active = 0;`
    const [result] = await (await connect()).query(sql)
    return result
}
export async function getAllCustomersBrasil() {
    const sql = `SELECT first_name, last_name, a.address, co.country
    FROM customer c, address a, city ct, country co
    WHERE c.address_id = a.address_id
        AND a.city_id = ct.city_id
        AND ct.country_id = co.country_id
        AND co.country = "Brazil";`
    const [result] = await (await connect()).query(sql)
    return result
}