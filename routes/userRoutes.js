import express from 'express';
import { getUsers, createUser, loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
