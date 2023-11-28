import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      max: 10,
      min: 0,
      default: 0,
    },
    reviewer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
