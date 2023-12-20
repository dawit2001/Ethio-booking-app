const express = require("express");
const {
  deleteUser,
  getProfile,
  getUser,
  getUserByEmail,
  getUsers,
  updateUser,
  getMap,
} = require("../controllers/users.js");
const { verifyUser } = require("../utils/jwt.js");
const router = express.Router();

// endpoint to check if users email is registered
router.get("/userEmail", getUserByEmail);
//
router.get("/profile", verifyUser, getProfile);
//
//
router.get("/", getUsers);
//
router.get("/:id", getUser);
//
router.put("/:id", updateUser);
//
router.delete("/:id", deleteUser);

module.exports = router;
