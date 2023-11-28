import express from "express";
import { getUserByEmail } from "../controllers/users.js";
const router = express.Router();

// endpoint to check if users email is registered
router.get("/userEmail", getUserByEmail);
//
router.get("/:id");
//
router.get("/");
//
router.put("/:id");
//
router.delete("/:id");
export default router;
