import express from "express";

import {createHotel ,updateHotel,deleteHotel,getHotel,getallHotel}from "../controllers/hotel.js"
import { verifyadmin } from "../utils/verifytoken.js";
const router=express.Router();


router.post("/",verifyadmin,createHotel);

router.put("/:id",verifyadmin,updateHotel);

router.delete("/:id",verifyadmin,deleteHotel)

router.get("/:id",getHotel )

router.get("/", verifyadmin,getallHotel)





export default router;