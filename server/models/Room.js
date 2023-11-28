import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema(
  {
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
    },
    images: {
      type: [String],
      validate: {
        validator: (arr) => {
          return arr.length <= 5;
        },
        message: "you can insert only five picutres of a room",
      },
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    maxPeople: {
      type: Number,
    },
    specialOffer: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", HotelSchema);
