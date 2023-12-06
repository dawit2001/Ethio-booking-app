const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error.js");

const generateToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, {
    expiresIn,
  });
};
const validateToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const verifyToken = (req, res, next) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyAdim = (req, res, next) => {};
const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = {
  verifyAdim,
  verifyUser,
  validateToken,
  generateToken,
};
