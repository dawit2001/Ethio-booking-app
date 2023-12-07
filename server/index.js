const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/Auth.js");
const userRouter = require("./routes/Users.js");
const prisma = require("./utils/prisma.js");
const http = require("http");

const app = express();
//
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://abebe.ethiobooking.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
    exposedHeaders: ["Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

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
app.listen(process.env.PORT || "4000", async () => {
  console.log("server connected....");
});
