import express, {Request, Response} from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
// import main from './ai/ibm.js';
import router from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

config();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// remove in production
app.use(morgan('dev'));

app.use('/api',router);

// app.get('/', (req, res) => {
//   console.log('Done')
//   res.send('Welcome to the Chat Bot API');
//   res.send(200);
// })


export default app;
