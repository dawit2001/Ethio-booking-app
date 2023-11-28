import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcryptjs";
import { sendConfirmationEmail } from "../utils/email.js";
import { generateToken, validateToken } from "../utils/jwt.js";
import dotenv from "dotenv";
dotenv.config();
export const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const salt = bycrypt.genSaltSync(16);
    const hashed = bycrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashed,
    });
    await newUser.save();
    const emailToken = generateToken(
      { userId: newUser.id, verified: newUser.isVerified },
      process.env.EMAIL_SECRET
    );
    sendConfirmationEmail(newUser, emailToken);
    res.status(201).json("User successfully registered");
  } catch (e) {
    next(e);
  }
};
export const signin = async (req, res, next) => {
  try {
  } catch (e) {}
};
export const confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
    console.log(validatedToken);
  } catch (e) {
    next(e);
  }
};
