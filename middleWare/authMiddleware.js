import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.id).select('-password');
      next();
    } catch (error) {
      throw new Error('Failed to authorize user, Token Failed');
    }
  } else {
    throw new Error('Failed to authorize user, Token Failed');
  }
});

const admin = asyncHandler((req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  res.status(401);
  throw new Error('Not Authorized as admin');
});

export { protect, admin };
