import express from 'express';
import { createOrder, getOrderById } from '../controllers/orderControllers.js';
import protect from '../middleWare/authMiddleWare.js';
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/:id', protect, getOrderById);
export default router;
