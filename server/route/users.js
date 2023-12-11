import express from "express";

import {createUser ,updateUser,deleteUser,getUser,getallUser}from "../controllers/user.js"
import { verifyadmin, verifyuser } from "../utils/verifytoken.js";
const router=express.Router();



router.put("/:id",verifyuser,updateUser);
router.delete("/:id", verifyuser,deleteUser)

router.get("/:id",verifyuser,getUser )

router.get("/", verifyadmin,getallUser)



export default router;