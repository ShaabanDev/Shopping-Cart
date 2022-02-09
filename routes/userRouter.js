import express from 'express';
import {
  authUser,
  getProfile,
  registerUser,
  updateProfile,
} from '../controllers/userControllers.js';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
export default router;
