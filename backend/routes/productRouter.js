import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
export default router;
