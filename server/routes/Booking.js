// bookingRoutes.js
import express from 'express';
import { registerBooking } from '../controllers/Booking.js';

const router = express.Router();

// Route to handle booking registration
router.post('/bookings', registerBooking);

export default router;
