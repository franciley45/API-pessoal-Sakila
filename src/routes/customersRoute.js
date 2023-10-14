import express from 'express';
import { getAllCustomersControllers, getAllCustomersInactiveControllers } from '../controllers/customers.js';
const customerRoute = express.Router();

customerRoute.get('/', getAllCustomersControllers)
customerRoute.get('/inactive', getAllCustomersInactiveControllers)


export default customerRoute;