const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    displayName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nationality: {
      type: String,
    },
    img: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UsersSchema);
module.exports = User;
