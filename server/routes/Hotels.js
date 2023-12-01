// bookingRoutes.js
import express from 'express';

import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotels.js';

const router = express.Router();

// Route to handle booking registration
router.post('/hotel', createHotel);
router.get('/hotelbyid/:id', getHotel)
router.patch('/update/:id', updateHotel)
router.delete('/delete/:id', deleteHotel)
router.get('/getallhotel', getHotels)


export default router;
