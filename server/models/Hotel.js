import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
        },
        description: {
            type: String,
        },
        photos: {
            type: [String],
        },
        amenities: {
            type: [String],
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        rooms: {
            type: [String],
            // Reference to the User model
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },

    },
    { timestamps: true }
);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
