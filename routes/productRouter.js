import express from 'express';
import {
  createProduct,
  createProductReview,
  deleteProductById,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from '../controllers/productControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProductById);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.post('/:id/review', protect, createProductReview);
router.get('/topproducts', protect, getTopProducts);

export default router;
