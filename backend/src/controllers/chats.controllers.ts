import { Request, Response, NextFunction } from "express";

export const getAllChats = (req: Request, res: Response, next: NextFunction) => {
  try {
    // retroeve all chats from the database
    const chats = [];
    if (!chats || chats.length === 0){
      return res.send(404).json({message: "No Chats Found"});
    }
    return res.status(200).json({message: "OK", chats});
  }
  catch (error){
    console.log(error);
    return res.status(500).json({message: "Error retrieving Chats", error})
  }
}