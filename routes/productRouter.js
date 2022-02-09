import express from 'express';
import {
  deleteProductById,
  getProductById,
  getProducts,
} from '../controllers/productControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProductById);
export default router;
