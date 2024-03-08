import express from 'express';
import { testCon, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', testCon)
router.post('/update/:id',verifyToken, updateUser)

export default router;