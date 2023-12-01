import express from "express";
import {
  deleteUser,
  getProfile,
  getUser,
  getUserByEmail,
  getUsers,
  updateUser,
} from "../controllers/users.js";
import { verifyUser } from "../utils/jwt.js";
const router = express.Router();

// endpoint to check if users email is registered
router.get("/userEmail", getUserByEmail);
//
router.get("/profile", verifyUser, getProfile);
//
router.get("/", getUsers);
//
router.get("/:id", getUser);
//
router.put("/:id", updateUser);
//
router.delete("/:id", deleteUser);
export default router;
