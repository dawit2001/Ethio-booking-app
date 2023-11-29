// bookingRoutes.js
import express from 'express';
import { registerBooking } from '../controllers/bookingController';

const router = express.Router();

// Route to handle booking registration
router.post('/bookings', registerBooking);

export default router;
