const multer = require("multer");
const fs = require("fs");
const path = require("path");

const hotelPath = path.join(__dirname, "../uploads/hotels");
const roomPath = path.join(__dirname, "../uploads/rooms");

// Create the directory if it doesn't exist
if (!fs.existsSync(hotelPath)) {
  fs.mkdirSync(hotelPath, { recursive: true });
}
if (!fs.existsSync(roomPath)) {
  fs.mkdirSync(roomPath, { recursive: true });
}
const hotelStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/hotels"));
  },
  filename: function (req, file, cb) {
    cb(null, "-" + file.originalname);
  },
});
const roomStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/rooms"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadHotel = multer({ storage: hotelStorage });
const uploadRoom = multer({ storage: roomStorage });
module.exports = { uploadHotel, uploadRoom };
