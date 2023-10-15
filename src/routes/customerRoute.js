import express from 'express';
import { getAllCustomerIdControllers } from '../controllers/customers.js';
const customerRoute = express.Router();


customerRoute.get('/:id', getAllCustomerIdControllers)


export default customerRoute;