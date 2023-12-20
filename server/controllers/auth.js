const bcrypt = require("bcryptjs");
const { sendConfirmationEmail } = require("../utils/email.js");
const { generateToken, validateToken } = require("../utils/jwt.js");
const dotenv = require("dotenv");
const { createError } = require("../utils/error.js");
const { prisma } = require("../utils/prisma.js");
dotenv.config();
//----

const setCookies = (res, accesstoken, refreshToken) => {
  res.cookie("access_token", accesstoken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(Date.now() + 15 * 60 * 1000),
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(Date.now() + 24 * 30 * 60 * 60 * 1000),
  });
};
const removeCookies = (res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(0),
  });
  res.cookie("refresh_token", "", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(0),
  });
};
const register = async (req, res, next) => {
  removeCookies(res);
  try {
    const salt = bcrypt.genSaltSync(16);
    const hashed = bcrypt.hashSync(req.body.password, salt);
    const newUser = await prisma.user.create({
      data: { ...req.body, password: hashed },
    });
    const emailToken = generateToken(
      { id: newUser.id, verified: newUser.isVerified },
      process.env.EMAIL_SECRET,
      "1d"
    );
    sendConfirmationEmail(newUser, emailToken);
    const payload = {
      id: newUser.id,
      isAdmin: newUser.isAdmin,
      isVerified: newUser.isVerified,
    };
    const accesstoken = generateToken(payload, process.env.JWT_SECRET, "15m");
    const refreshtoken = generateToken(
      payload,
      process.env.REFRESH_SECRET,
      "30d"
    );
    setCookies(res, accesstoken, refreshtoken);
    res.status(201).json("User successfully registered");
  } catch (e) {
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};

//------
const signin = async (req, res, next) => {
  removeCookies(res);
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user)
      return next(
        createError(404, "Invalid credentials check your email or password")
      );

    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));
    const payload = {
      id: user.id,
      isAdmin: user.isAdmin,
      isVerified: user.isVerified,
    };
    const accesstoken = generateToken(payload, process.env.JWT_SECRET, "15m");
    const refreshtoken = generateToken(
      payload,
      process.env.REFRESH_SECRET,
      "30d"
    );
    const { password, ...otherDetails } = user;

    setCookies(res, accesstoken, refreshtoken);
    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

// GoogleAuth
const googleSignIn = (req, res, next) => {};

//
const signout = (req, res, next) => {
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
const refreshAccessToken = async (req, res, next) => {
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
    const user = await prisma.user.findUnique({
      where: { id: validatedToken.id },
    });
    const AccessToken = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.JWT_SECRET,
      "30d"
    );
    const { password, ...otherDetails } = user;

    res.cookie("access_token", AccessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};

//----- confirm token =require email after user signed up

const confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: validatedToken.id },
    });
    if (!user) next(createError(404, "user not found ... please retry again"));
    const updatedUser = await prisma.user.update({
      data: {
        isVerified: true,
      },
      where: {
        id: user.id,
      },
    });

    res.redirect("http://localhost:3000/email-confirmed");
  } catch (e) {
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};

//-------- confirms token =require email when user reset their password
const confirmResetEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const validatedToken = validateToken(token, process.env.RESET_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: validatedToken.id },
    });
    if (!validatedToken || !user) next(createError(403, "Invalid token"));
    res.redirect(
      `http://localhost:3000/recover-account/reset-password?email=${user.email}`
    );
  } catch (e) {
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};

//
const resetPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      next(createError(404, "Email not found.please use your account's email"));
    const salt = bcrypt.genSaltSync(16);
    const hashed = bcrypt.hashSync(password, salt);
    const validUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (!validUser)
      next(createError(404, "user not found .. please try again"));
    const updatedUser = await prisma.user.update({
      data: {
        password: hashed,
      },
      where: {
        id: validUser.id,
      },
    });
    const payload = {
      id: updatedUser.id,
      isAdmin: updatedUser.isAdmin,
      isVerified: updatedUser.isVerified,
    };
    const accesstoken = generateToken(payload, process.env.JWT_SECRET, "15m");
    const refreshtoken = generateToken(
      payload,
      process.env.REFRESH_SECRET,
      "30d"
    );
    setCookies(res, accesstoken, refreshtoken);
    res.status(200).json("Updated password successfully");
  } catch (e) {
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  confirmEmail,
  resetPassword,
  confirmResetEmail,
  refreshAccessToken,
  isTokenExpired,
  signout,
  googleSignIn,
  signin,
  register,
};
