import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            title: {
                type: String,

            },
            desc: String,
        },
        desc: {
            type: String,
            required: true,
        },
        popularAmenities: {
            type: [String],
            required: true,
        },
        otherAmenities: [
            {
                category: String,
                feature: [String],
            },
        ],
        location: {
            city: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            streetAddress: {
                type: String,
                required: true,
            },
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
            max: 5,
            min: 0,
            default: 0,
        },
        policies: {
            checkIn: {
                from: {
                    type: String,
                    required: true,
                },
                util: {
                    type: String,
                    required: true,
                },
            },
            checkout: {
                from: {
                    type: String,
                    required: true,
                },
                util: {
                    type: String,
                    required: true,
                },
            },
            children: {
                allowed: Boolean,
                details: String,
            },
            pet: {
                allowed: Boolean,
                details: String,
            },
            smoking: {
                allowed: Boolean,
                details: String,
            },
        },
        price: {
            lowestPrice: { type: Number },
            highestPrice: { type: Number },
            currency: { type: String },
        },
        rooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Room",
            },
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        parking: {
            available: Boolean,
            price: Number,
            Location: {
                type: String,
                enum: ["in the building", "other location"]
            },
        },
    },
    { timestamps: true }
);
export default mongoose.model("Hotel", HotelSchema);