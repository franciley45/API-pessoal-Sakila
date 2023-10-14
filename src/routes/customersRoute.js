import express from 'express';
import { getAllCustomersControllers } from '../controllers/customers.js';

const customerRoute = express.Router();

customerRoute.get('/', getAllCustomersControllers)


export default customerRoute;