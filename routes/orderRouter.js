import express from 'express';
import { createOrder } from '../controllers/orderControllers.js';
import protect from '../middleWare/authMiddleWare.js';
const router = express.Router();

router.post('/', protect, createOrder);
export default router;
