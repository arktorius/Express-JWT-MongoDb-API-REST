import { Router } from 'express'
import *as authController from '../controllers/Auth.Controller'


const authRouter = Router();


authRouter.post('/singup', authController.singUp);
authRouter.post('/singin', authController.singIn);


export default authRouter;