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
      process.env.EMAIL_SECRET,
      "1d"
    );
    sendConfirmationEmail(newUser, emailToken);
    const token = generateToken(
      {
        id: newUser.id,
        isAdmin: newUser.isAdmin,
        isVerified: newUser.isVerified,
      },
      process.env.JWT_SECRET,
      "15m"
    );
    const refreshToken = generateToken(
      {
        id: newUser.id,
        isAdmin: newUser.isAdmin,
        isVerified: newUser.isVerified,
      },
      process.env.REFRESH_SECRET,
      "30d"
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(Date.now() + 15 * 60 * 1000),
    });
    res.status(201).json("User successfully registered");
  } catch (e) {
    next(e);
  }
};

//------
export const signin = async (req, res, next) => {
  console.log("login requested");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(
        createError(404, "Invalid credentials check your email or password")
      );

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));
    const token = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.JWT_SECRET,
      "15m"
    );
    const refreshToken = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.REFRESH_SECRET,
      "30d"
    );
    const { password, ...otherDetails } = user._doc;

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        expires: new Date(Date.now() + 15 * 60 * 1000),
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

// GoogleAuth
export const googleSignIn = (req, res, next) => {};

//
export const signout = (req, res, next) => {
  console.log("come on man");
  res.cookie("access_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
    path: "/",
  });
  res.cookie("refresh_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
    path: "/",
  });
  res.status(200).json("user logged out");
};
// checks if token is expired
function isTokenExpired(expirationTimestamp) {
  const now = Date.now() / 1000;
  return now >= expirationTimestamp;
}

// refresh accesstoken after  the initial accesstoken is expired
export const refreshAccessToken = async (req, res, next) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
    path: "/",
  });

  try {
    const token = req.cookies["refresh_token"];
    const validatedToken = validateToken(token, process.env.REFRESH_SECRET);
    if (!validatedToken || isTokenExpired(validatedToken.exp))
      next(createError(403, "Invalid token"));
    console.log(validatedToken);
    const user = await User.findById(validatedToken.id);
    const AccessToken = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.JWT_SECRET,
      "30d"
    );
    const { password, ...otherDetails } = user._doc;

    res.cookie("access_token", AccessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    console.log(req.cookies["access_token"]);
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

//----- confirm token from email after user signed up

export const confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
    const user = await User.findByIdAndUpdate(
      validatedToken.id,
      {
        $set: {
          isVerified: true,
        },
      },
      { new: true }
    );

    res.redirect("http://localhost:3000/email-confirmed");
  } catch (e) {
    next(e);
  }
};

//-------- confirms token from email when user reset their password
export const confirmResetEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.RESET_SECRET);
    console.log(validatedToken);
    const user = await User.findById(validatedToken.id);
    if (!validatedToken || !user) next(createError(403, "Invalid token"));
    res.redirect(
      `http://localhost:3000/recover-account/reset-password?email=${user.email}`
    );
  } catch (e) {
    next(e);
  }
};

//
export const resetPassword = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      next(createError(404, "Email not found.please use your account's email"));
    const salt = bcrypt.genSaltSync(16);
    const hashed = bcrypt.hashSync(password, salt);
    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      {
        $set: {
          password: hashed,
        },
      },
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json("Updated password successfully");
  } catch (e) {
    next(e);
  }
};
