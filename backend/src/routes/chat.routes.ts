import { Router } from "express";
import { getAllChats } from "../controllers/chats.controllers.js";

const chatRoute = Router();

chatRoute.get("/", getAllChats);

export default chatRoute;