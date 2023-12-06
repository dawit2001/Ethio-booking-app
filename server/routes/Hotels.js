const express = require("express");
const { getUserByEmail } = require("../controllers/users.js");
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

module.exports = router;
