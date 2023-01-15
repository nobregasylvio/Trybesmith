import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

const orderController = new UserController();

router.post('/', orderController.create);

export default router;