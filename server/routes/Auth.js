import express from "express";
import { confirmEmail, register, signin } from "../controllers/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/signin", signin);
router.get("/confirmEmail", confirmEmail);
export default router;
