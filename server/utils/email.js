import nodemailer from "nodemailer";
import hbs from "handlebars";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
import path from "path";
import { createError } from "./error.js";
import { generateToken, validateToken } from "./jwt.js";
import User from "../models/User.js";
import { create } from "domain";
// nodemailer configuration for smtp email protocol
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = (user, token) => {
  const url = `http://localhost:4000/api/auth/confirmEmail?token=${token}`;
  const emailTemplateSource = fs.readFileSync(
    path.join("templates", "accountConfirmation.hbs"),
    "utf8"
  );
  const template = hbs.compile(emailTemplateSource);
  const htmlToSend = template({ url: url, email: user.email });
  const mailOptions = {
    from: `"No Reply" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Verify your account",
    html: htmlToSend,
  };
  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      createError(500, `something went wrong ${error}`);
    } else {
      console.log("Successfully sent email.");
    }
  });
};

export const sendPasswordRestEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) next(createError(404, "user not found"));
    const token = generateToken(
      { id: user.id, isAdmin: user.isAdmin, isVerified: user.isVerified },
      process.env.RESET_SECRET
    );

    const url = `http://localhost:4000/api/auth/confirmResetEmail?token=${token}`;
    const emailTemplateSource = fs.readFileSync(
      path.join("templates", "passwordReset.hbs"),
      "utf8"
    );
    const template = hbs.compile(emailTemplateSource);
    const htmlToSend = template({ url: url });
    const mailOptions = {
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Reset your Password",
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        next(createError(500, `something went wrong ${error}`));
      } else {
        res.status(200).json("Successfully sent email.");
        console.log("successfull");
      }
    });
  } catch (error) {
    next(error);
  }
};
