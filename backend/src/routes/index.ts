import {Router} from 'express';
import { runInContext } from 'vm';
import userRoute from './user.routes.js';
import chatRoute from './chat.routes.js';


const router = Router();

//maindomain//routerfromindex/thenthis
router.use('/user', userRoute);  // domain/api/v1/user -> userRoute
router.use('/chats', chatRoute);// domain/api/v1/chats -> chatRoute



export default router;

