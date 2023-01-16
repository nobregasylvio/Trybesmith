import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.post('/', userController.login);

export default router;