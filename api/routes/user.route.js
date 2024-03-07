import express from 'express';
import { testCon } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', testCon)

export default router;