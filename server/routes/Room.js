// bookingRoutes.js
import express from 'express';

import { createRoom, deleteRoomById, getAllRooms, getRoomById, updateRoomById } from '../controllers/rooms.js';

const router = express.Router();

// Route to handle booking registration
router.post('/room', createRoom);
router.get('/getRoomById/:id', getRoomById)
router.get('/getall', getAllRooms)
router.delete('/delete/:id', deleteRoomById)
router.patch('/updateroom/:id', updateRoomById)


export default router;
