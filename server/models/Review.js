import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
        },
        rating: [
            {
                category: String,
                rating: {
                    type: Number,
                    max: 10,
                    min: 1,
                    default: 1,
                },
            },
        ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        helpful: Number,
        notHelpful: Number,
    },
    { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);