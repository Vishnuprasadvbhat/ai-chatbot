import { Router } from "express";
import { getAllusers, loginUser, registerUser} from "../controllers/user.controller.js";
import { user_validate, signup_validator, login_validator } from "../utils/validators.js";


const userRoute = Router();

//userRoute.get('/',getAllusers);
userRoute.post('/signup', user_validate(signup_validator), registerUser);
userRoute.post('/login', user_validate(login_validator), loginUser);


export default userRoute;
  