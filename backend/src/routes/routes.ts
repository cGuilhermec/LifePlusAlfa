import express from 'express';
import { userController } from '../controller/UserController';
import { loginController } from '../controller/LoginController';
import { AuthMiddleware } from '../middleware/AuthMiddleware';

export const router = express.Router();

//Rotas que precisam de autenticação:
router.post('/verify-user',  AuthMiddleware.authenticateToken ,userController.verifyIfUserExists);
router.post('/update-user/:emailParams',  AuthMiddleware.authenticateToken ,userController.updateUser);
router.get('/user-info/:email', AuthMiddleware.authenticateToken, userController.getAllInfosUserByEmail);


//Rotas que não precisam de autenticação:
router.post('/create', userController.createUser);
router.post('/login', loginController.userLogin);