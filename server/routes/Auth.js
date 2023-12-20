const express = require("express");
const {
  confirmEmail,
  confirmResetEmail,
  googleSignIn,
  refreshAccessToken,
  register,
  resetPassword,
  signin,
  signout,
  payment,
} = require("../controllers/auth.js");
const { sendPasswordRestEmail } = require("../utils/email.js");
const router = express.Router();
router.post("/register", register);
router.post("/signin", signin);
router.get("/confirmEmail", confirmEmail);
router.post("/resetPasswordEmail", sendPasswordRestEmail);
router.get("/confirmResetEmail", confirmResetEmail);
router.post("/resetPassword", resetPassword);
router.get("/refresh", refreshAccessToken);
router.get("/signout", signout);
router.post("/googleAuth", googleSignIn);

module.exports = router;
