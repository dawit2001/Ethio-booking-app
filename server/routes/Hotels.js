import express from "express";
import { getUserByEmail } from "../controllers/users.js";
const router = express.Router();

// endpoint to check if users email is registered
router.get("/", getHotels);
//
router.get("/:id", getHotel);
//
router.get("/");
//
router.put("/:id", updateHotel);
//
router.delete("/:id", deleteHotel);
export default router;
