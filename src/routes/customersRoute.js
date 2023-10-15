import express from 'express';
import { getAllCustomersBrasilControllers, getAllCustomersControllers, getAllCustomersInactiveControllers } from '../controllers/customers.js';
const customersRoute = express.Router();

customersRoute.get('/', getAllCustomersControllers)
customersRoute.get('/inactive', getAllCustomersInactiveControllers)
customersRoute.get('/brasil', getAllCustomersBrasilControllers)


export default customersRoute;