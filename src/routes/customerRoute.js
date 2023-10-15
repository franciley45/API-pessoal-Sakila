import express from 'express';
import { getAllCustomerIdControllers, getAllCustomersBrasilControllers, getAllCustomersControllers, getAllCustomersInactiveControllers } from '../controllers/customers.js';
const customerRoute = express.Router();


customerRoute.get('/:id', getAllCustomerIdControllers)


export default customerRoute;