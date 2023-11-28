import mongoose from "mongoose";
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
    },
    Nationality: {
      type: String,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    dateofbirth: {
      type: Date,
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
export default mongoose.model("User", UsersSchema);
