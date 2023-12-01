import express from "express";
import {
  confirmEmail,
  confirmResetEmail,
  googleSignIn,
  refreshAccessToken,
  register,
  resetPassword,
  signin,
  signout,
} from "../controllers/auth.js";
import { sendPasswordRestEmail } from "../utils/email.js";
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
export default router;
