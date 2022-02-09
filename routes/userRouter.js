import express from 'express';
import {
  authUser,
  deleteUser,
  getAllUsers,
  getProfile,
  getUserById,
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
router.get('/:id', protect, admin, getUserById);
export default router;
