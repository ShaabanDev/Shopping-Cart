import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRouter.js';
import userRoutes from './routes/userRouter.js';
import orderRoutes from './routes/orderRouter.js';
import uploadRoutes from './routes/uploadRouter.js';
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
app.use('/api/upload', uploadRoutes);
app.get('api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
