import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const generateToken = (payload, secret) => {
  console.log(payload);
  console.log(secret);
  return jwt.sign(payload, secret);
};
export const validateToken = (token, secret) => {
  return jwt.verify(token, secret);
};
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};
