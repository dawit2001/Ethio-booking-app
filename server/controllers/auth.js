import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendConfirmationEmail } from "../utils/email.js";
import { generateToken, validateToken } from "../utils/jwt.js";
import dotenv from "dotenv";
import { io } from "../utils/socket.js";
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
    const user = await User.findOne({ username: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
export const confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
    const user = res.redirect("http://localhost:3000/email-confirm");
  } catch (e) {
    next(e);
  }
};
