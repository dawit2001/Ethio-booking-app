import express from "express";
import {
  ResetPassword,
  confirmEmail,
  confirmResetEmail,
  register,
  signin,
} from "../controllers/auth.js";
import { sendPasswordRestEmail } from "../utils/email.js";
const router = express.Router();
router.post("/register", register);
router.post("/signin", signin);
router.get("/confirmEmail", confirmEmail);
router.post("/resetPasswordEmail", sendPasswordRestEmail);
router.get("/confirmResetEmail", confirmResetEmail);
router.get("/resetPassword", ResetPassword);
export default router;
