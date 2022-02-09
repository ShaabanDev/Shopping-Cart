import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRouter.js';
import userRoutes from './routes/userRouter.js';
import orderRoutes from './routes/orderRouter.js';
import { errorHandler, notFound } from './middleWare/errorMiddleware.js';
dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
