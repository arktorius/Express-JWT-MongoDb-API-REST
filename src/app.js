import express from 'express'
import morgan from 'morgan';
import userRouter from './routes/User.Routes'
import cors from 'cors'

const app = express();

app.set('port', process.env.PORT || 3500)



app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));//this is for HTML requests





app.use('/user', userRouter);



export default app