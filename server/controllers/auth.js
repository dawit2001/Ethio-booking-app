import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { sendConfirmationEmail } from "../utils/email.js";
import { generateToken, validateToken } from "../utils/jwt.js";
import dotenv from "dotenv";
import { createError } from "../utils/error.js";
dotenv.config();
//----
export const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(16);
    const hashed = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashed,
    });
    await newUser.save();
    const emailToken = generateToken(
      { id: newUser.id, verified: newUser.isVerified },
      process.env.EMAIL_SECRET
    );
    sendConfirmationEmail(newUser, emailToken);
    res.status(201).json("User successfully registered");
  } catch (e) {
    next(e);
  }
};

//------
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));
    const token = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.JWT_SECRET
    );
    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 15 * 60 * 1000),
        path: "/",
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};

//-----
export const confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
    console.log(validatedToken);
    const user = await User.findByIdAndUpdate(
      validatedToken.id,
      {
        $set: {
          isVerified: true,
        },
      },
      { new: true }
    );

    res.redirect("http://localhost:3000/email-confirm");
  } catch (e) {
    next(e);
  }
};

export const confirmResetEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.RESET_SECRET);
    console.log(validatedToken);
    const user = await User.findById(validatedToken.id);
    if (!validatedToken || !user) next(createError(403, "Invalid token"));
    res.redirect("http://localhost:3000/reset-password");
  } catch (e) {
    next(e);
  }
};

//-----
export const ResetPassword = async (req, res, next) => {
  try {
    const { token } = req.query;
  } catch (e) {
    next(e);
  }
};
