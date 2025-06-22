// manages all the tokens in the system

import jwt from "jsonwebtoken";

export const createToken = ( id: String, email: String, expiresIn) => {
  const payload = {id, email};
  const token = jwt.sign(payload, process.env.JWT_SECRET,{
    expiresIn,});
  return token;
  }; 