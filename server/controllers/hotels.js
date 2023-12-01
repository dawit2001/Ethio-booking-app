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
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};
export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
};