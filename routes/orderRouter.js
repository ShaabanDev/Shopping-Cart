import express from 'express';
import {
  createOrder,
  getCurrentUserOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js';
import protect from '../middleWare/authMiddleWare.js';
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.get('/', protect, getCurrentUserOrders);
export default router;
