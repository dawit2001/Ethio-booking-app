import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// Assuming you have User and Review schemas
import User from "../models/User.js";
import Review from "../models/Review.js";


export const createHotel = async (req, res, next) => {
    const { hotelData, roomsData, reviewsData, ownerData } = req.body;

    try {
        // Create the hotel owner
        const owner = await User.create(ownerData);

        // Create the hotel and associate it with the owner
        const hotel = await Hotel.create({ ...hotelData, owner: owner._id });

        // Create rooms associated with the hotel
        const createdRooms = await Promise.all(
            roomsData.map(async (roomData) => {
                const room = new Room({ ...roomData, hotel: hotel._id });
                return room.save();
            })
        );

        // Create reviews associated with the hotel and rooms
        const createdReviews = await Promise.all(
            reviewsData.map(async (reviewData, index) => {
                const review = new Review({
                    ...reviewData,
                    hotel: hotel._id,
                    room: createdRooms[index]._id,
                    user: owner._id,
                });
                return review.save();
            })
        );

        // Update the hotel with the created room, review, and owner IDs
        hotel.owner = owner._id;
        hotel.rooms = createdRooms.map((room) => room._id);
        hotel.reviews = createdReviews.map((review) => review._id);
        await hotel.save();

        res.status(201).json({ hotel, owner, rooms: createdRooms, reviews: createdReviews });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
};
/*
export const updateHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const { hotelData, roomsData, reviewsData, ownerData } = req.body;

    try {
        // Find the hotel to be updated
        const hotel = await Hotel.findById(hotelId);



        // Update hotel owner
        const updatedOwner = await User.findByIdAndUpdate(hotel.owner, ownerData, { new: true });

        // Update hotel data
        Object.assign(hotel, hotelData);
        await hotel.save();

        // Update rooms associated with the hotel
        const updatedRooms = await Promise.all(
            roomsData.map(async (roomData, index) => {
                const roomId = hotel.rooms[index];
                const updatedRoom = await Room.findByIdAndUpdate(roomId, roomData, { new: true });
                return updatedRoom;
            })
        );

        // Update reviews associated with the hotel and rooms
        const updatedReviews = await Promise.all(
            reviewsData.map(async (reviewData, index) => {
                const reviewId = hotel.reviews[index];
                const updatedReview = await Review.findByIdAndUpdate(reviewId, reviewData, { new: true });
                return updatedReview;
            })
        );

        res.status(200).json({
            hotel: { ...hotel._doc, owner: updatedOwner._id },
            owner: updatedOwner,
            rooms: updatedRooms,
            reviews: updatedReviews,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};* /



/*
export const deleteHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId;

    try {
        // Find the hotel to be deleted
        const hotel = await Hotel.findById(hotelId);

        if (!hotel) {
            return res.status(404).json({ error: "Hotel not found" });
        }

        // Delete associated rooms
        await Room.deleteMany({ hotel: hotel._id });

        // Delete associated reviews
        await Review.deleteMany({ hotel: hotel._id });

        // Delete the hotel owner if it exists
        if (hotel.owner) {
            const owner = await User.findById(hotel.owner);
            if (owner) {
                await owner.remove();
            }
        }

        // Delete the hotel
        await hotel.remove();

        res.status(200).json({ message: "Hotel and associated data deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};


*/
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};



export const getHotels = async (req, res) => {
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
