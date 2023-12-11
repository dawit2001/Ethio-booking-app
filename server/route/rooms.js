import express from "express";

import {createRoom ,updateRoom,deleteRoom,getRoom,getallRoom}from "../controllers/room.js"
import { verifyadmin } from "../utils/verifytoken.js";
const router=express.Router();


router.post("/:hotelid",verifyadmin,createRoom);

router.put("/:id",verifyadmin,updateRoom);

router.delete("/:id/:hotelid",verifyadmin,deleteRoom)

router.get("/:id",getRoom )

router.get("/", verifyadmin,getallRoom)





export default router;