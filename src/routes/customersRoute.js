import express from 'express';
import { getAllCustomersBrasilControllers, getAllCustomersControllers, getAllCustomersInactiveControllers } from '../controllers/customers.js';
const customerRoute = express.Router();

customerRoute.get('/', getAllCustomersControllers)
customerRoute.get('/inactive', getAllCustomersInactiveControllers)
customerRoute.get('/brasil', getAllCustomersBrasilControllers)


export default customerRoute;