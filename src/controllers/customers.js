import { getAllCustomers } from "../models/customers.js";

const status = 200;

export async function getAllCustomersControllers(_req, res) {
    const result = await getAllCustomers()
    return res.status(status).json(result)
}