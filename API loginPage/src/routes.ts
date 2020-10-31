import { Router, Request, Response } from 'express';

import authMiddleware from './middlewares/authMiddleware'

import UserController from './controllers/UserController'
import authController from './controllers/AuthController'

const routes = Router()

routes.post('/users', UserController.createUser);
routes.post('/users/signin', authController.authenticate);
routes.get('/users/homepage',authMiddleware, UserController.index);

export default routes