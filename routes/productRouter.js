import express from 'express';
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
} from '../controllers/productControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProductById);
router.post('/', protect, admin, createProduct);

export default router;
