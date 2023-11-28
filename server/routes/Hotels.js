import express from "express";
const router = express.Router();
//const hotelController = require('../controllers/hotelController');
import hotelController from "../controllers/hotels";
// Routes for hotels
router.get('/hotels', hotelController.getAllHotels);
router.get('/hotels/:hotelId', hotelController.getHotelById);
router.post('/hotels', hotelController.createHotel);
router.put('/hotels/:hotelId', hotelController.updateHotelById);
router.delete('/hotels/:hotelId', hotelController.deleteHotelById);

module.exports = router;
