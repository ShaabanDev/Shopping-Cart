import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    paymentResult,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('no order items');
  }
  const order = new Order({
    orderItems,
    shippingAddress,
    user: req.user._id,
    paymentMethod,
    paymentResult,
    taxPrice,
    shippingPrice,
    totalPrice,
  });
  const createdOrder = await order.save();
  res.status(201).send(createdOrder);
});

export { createOrder };
