import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    quantity: { type: Number, default: 1 },
    desc: {
      type: String,
      required: true,
    },
    amenities: [
      {
        category: String,
        feature: [String],
      },
    ],
    images: {
      type: [String],
      validate: {
        validator: (arr) => {
          return arr.length <= 5;
        },
        message: "you can insert only five picutres of a room",
      },
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }], // stores room numbers and check their availablility
    maxPeople: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0,
        message: "Max people must be a positive number",
      },
    },
    bathroom: {
      private: Boolean,
      amenities: [String],
    },
    bedType: String,
  },
  { timestamps: true }
);
export default mongoose.model("Room", RoomSchema);
