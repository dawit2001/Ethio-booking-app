import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      require: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
    },
    map: {
      type: String,
    },
    images: { type: [String] },
    review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    rating: {
      type: Number,
      max: 10,
      min: 0,
      default: 0,
    },
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    currency: { type: [String] },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", HotelSchema);
