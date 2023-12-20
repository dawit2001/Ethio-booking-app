const express = require("express");
const { getUserByEmail } = require("../controllers/users.js");
const {
  registerHotel,
  uploadHotelImage,
  searchHotel,
  getHotel,
} = require("../controllers/hotels.js");
const { uploadHotel } = require("../utils/upload.js");
const { Geocoder } = require("../utils/geoLoc.js");
const router = express.Router();

// endpoint to check if users email is registered
//
//
router.get("/search", searchHotel);
router.post("/upload", uploadHotel.single("file"), uploadHotelImage);
router.post("/new", Geocoder, registerHotel);
router.get("/:id", getHotel);
//
//
//

module.exports = router;
