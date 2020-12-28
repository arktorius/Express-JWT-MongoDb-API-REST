import express from 'express'
import morgan from 'morgan';
import cors from 'cors'

import userRouter from './routes/User.Routes'
import blogRouter from './routes/Blogs.Routes'
import authRouter from './routes/Auth.Routes'
import {createRoles} from './libs/Role.Initial'


const app = express();
createRoles();
app.set('port', process.env.PORT || 3500)



app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));




app.use('/blog',blogRouter)
app.use('/user', userRouter);
app.use('/api',authRouter);


export default app