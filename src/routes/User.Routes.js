import {Router} from 'express'
import *as UserController from '../controllers/User.Controller'

const userRouter=Router();

userRouter.get('/',UserController.allUsers);
userRouter.get('/:idUser',UserController.oneUser);
userRouter.post('/',UserController.createUser);
userRouter.put('/:idUser',UserController.updateUser);
userRouter.delete('/:idUser',UserController.delUser);

export default userRouter;

