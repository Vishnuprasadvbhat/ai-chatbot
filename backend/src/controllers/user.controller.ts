import { NextFunction, Request, Response } from 'express';
import User from '../models/user.model.js'
import { hash, compare}from 'bcrypt';
import { createToken } from '../utils/token-manager.js';
import { COOKIE_NAME, COOKIE_OPTIONS } from '../utils/constants.js';


export const getAllusers = async(req: Request, res: Response, next : NextFunction) => {
  // get all users 
  try{
    const users= await User.find();
    return res.status(200).json({message : "OK", users});
  }catch (error) {
    console.log(error);
    return res.status(200).json({message: "Error", error})
  }
}

export const registerUser = async(req: Request, res:Response, next: NextFunction) => {
  // register a new user 

  try {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists, Please login" });
  }

  if (!existingUser) {
    const hashedPassword = await(hash(password, 10));
    const user = new User({name, email, password: hashedPassword });
    await user.save();

    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS); // clear any existing auth token
    
    // create a token for the user
    const token = createToken(user._id.toString(), user.email, '7d');

    // sending the token in form of a cookie 
    res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS);

    return res.status(201).json({message: "User created successfully", id : user._id.toString()});
  }
  }
  catch (error){
    console.log(error);
    return res.status(500).json({message: "Error creating user", error});
  }
} 


export const loginUser = async(req:Request, res:Response, next: NextFunction) => {

  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(400).json({message: "All fields are required"});
    }
    const user = await User.findOne({email: email});

    if (!user){
      return res.status(400).json({message: "User does not exist, Please register"});
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid){
      return res.status(403).json({message: "Incorrect Password"}) 
    }

    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS); // clear any existing auth token

    // create a token for the user
    const token = createToken(user._id.toString(), user.email, '7d');

    // sending the token in form of a cookie 
    res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS);

    return res.status(200).json({message: "Login successful", id: user._id.toString()});

  }catch (error) {
    console.log(error);
    return res.status(500).json({message: "Error logging in", error});
  }
};

export const deleteUser = async(req: Request, res: Response, next: NextFunction) => {
  // delete a user
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clear the cookie after user deletion
    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
    return res.status(200).json({ message: "User deleted successfully" });
  
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting user", error });
  }
  };


