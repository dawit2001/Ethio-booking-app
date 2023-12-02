import express from "express";
import { getUser, getUserByEmail } from "../controllers/users.js";
const router = express.Router();

// endpoint to check if users email is registered
router.get("/userEmail/:id", getUser);
export default router;
