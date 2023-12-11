import express from "express";
import mongoose from "mongoose";
import authRoute from "./route/auth.js";
import hotelsRoute from "./route/hotels.js";
import roomsRoute from "./route/rooms.js";
import usersRoute from "./route/users.js";
import cookieParser from "cookie-parser";

const app=express();


 const connect= async ()=>{
try{
    await mongoose.connect("mongodb://localhost:27017/hotel");

}
catch(error){
 throw(error);
}
 };
 app.use (cookieParser());

app.use (express.json());
app.use("/auth",authRoute);
app.use("/hotels",hotelsRoute);
app.use("/rooms",roomsRoute);
app.use("/users",usersRoute);


app.listen(3000, ()=>{
    connect();
    console.log("connected to port 3000");
})