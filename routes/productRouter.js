import express from 'express';
import asyncHandler from 'express-async-handler';
import { getProductById, getProducts } from '../controllers/productControllers.js';
import Product from '../models/productModel.js';
const router = express.Router();

router.get(
  '/',getProducts
);

router.get(
  '/:id',
  getProductById
);
export default router;
