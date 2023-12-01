// bookingRoutes.js
import express from 'express';

import { getAllRooms, getRoomById } from '../controllers/rooms.js';

const router = express.Router();

// Route to handle booking registration
router.get('/room', getAllRooms);
router.get('/getRoomById/:id', getRoomById)



export default router;
