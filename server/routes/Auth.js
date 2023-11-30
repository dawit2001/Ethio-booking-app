import express from "express";
import {
  confirmEmail,
  confirmResetEmail,
  refreshAccessToken,
  register,
  resetPassword,
  signin,
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
export default router;
