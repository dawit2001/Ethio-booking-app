import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/Auth.js";
import userRouter from "./routes/Users.js";
import bookingRouter from "./routes/Booking.js";
import hotelRouter from "./routes/Hotels.js";
import roomRouter from "./routes/Room.js";
import { json } from "react-router";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect('mongodb-url');
    console.log("connected to database");
  } catch (e) {
    throw e;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use('/api/Booking', bookingRouter);
app.use('/api/hotel', hotelRouter);
app.use("/api/Booking", bookingRouter);
app.use("/api/room", roomRouter)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(process.env.PORT || "4000", () => {
  connect();
  console.log("server connected....");

});
