import express from 'express';
import {
  createOrder,
  getCurrentUserOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
} from '../controllers/orderControllers.js';
import { admin, protect } from '../middleWare/authMiddleWare.js';
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.get('/', protect, getCurrentUserOrders);
router.get('/', protect, admin, getOrders);
export default router;
