import express, { json } from 'express'
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 3500)



app.use(morgan('dev'));
app.use(json());




export default app