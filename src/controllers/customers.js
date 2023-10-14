import { getAllCustomers, getAllCustomersBrasil, getAllCustomersInactive } from "../models/customers.js";
import { getAllFilmsActorName } from "../models/films.js";

const status = 200;

export async function getAllCustomersControllers(_req, res) {
    const result = await getAllCustomers()
    return res.status(status).json(result)
}

export async function getAllCustomersInactiveControllers(_req, res) {
    const result = await getAllCustomersInactive()
    return res.status(status).json(result)
}

export async function getAllCustomersBrasilControllers(_req, res) {
    const result = await getAllCustomersBrasil()
    return res.status(status).json(result)
}

export async function getAllFilmsActorNameControllers(req, res) {
    const { name }=  req.params
    const result = await getAllFilmsActorName(name)
    if(result.length === 0 ) return res.status(400).json({message: 'actor not found'})
    return res.status(status).json(result)
}