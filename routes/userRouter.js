import express from 'express';
import {
  authUser,
  deleteUser,
  getAllUsers,
  getProfile,
  getUserById,
  registerUser,
  updateProfile,
  updateUserById,
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
router.put('/:id', protect, admin, updateUserById);
export default router;
