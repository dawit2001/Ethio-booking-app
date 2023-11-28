import nodemailer from "nodemailer";
import hbs from "handlebars";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
import path from "path";
import { createError } from "./error.js";
import { validateToken } from "./jwt.js";
// nodemailer configuration for smtp email protocol
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (user, token) => {
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
export const validateConfirmedEmail = (req, res, next) => {
  const { token } = req.query;
  const validatedToken = validateToken(token, process.env.EMAIL_SECRET);
  console.log("come on man");
  console.log(validateToken);
};
