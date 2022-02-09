import express from 'express';
import {
  authUser,
  deleteUser,
  getAllUsers,
  getProfile,
  registerUser,
  updateProfile,
} from '../controllers/userControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);
export default router;
