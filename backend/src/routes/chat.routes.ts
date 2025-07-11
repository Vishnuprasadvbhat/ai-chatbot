import { Router } from "express";
import { getAllChats } from "../controllers/chats.controllers.js";

const chatRoute = Router();

chatRoute.get("/chats", getAllChats);

export default chatRoute;