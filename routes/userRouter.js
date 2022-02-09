import express from 'express';
import { authUser, getProfile } from '../controllers/userControllers.js';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.get('/profile', protect, getProfile);
export default router;
