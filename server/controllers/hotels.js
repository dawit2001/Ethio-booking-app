const Hotel = require('../models/Hotel');
const validator = require('validator'); // Example validation library

const hotelController = {
    getAllHotels: async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.json(hotels);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getHotelById: async (req, res) => {
        const { hotelId } = req.params;

        try {
            const hotel = await Hotel.findById(hotelId).populate('owner').exec();
            if (!hotel) {
                return res.status(404).json({ error: 'Hotel not found' });
            }

            res.json(hotel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    createHotel: async (req, res) => {
        const { name, location, description, amenities, rating, owner, photos,
            rooms, } = req.body;

        // Example input validation using the validator library
        if (!validator.isLength(name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: 'Name must be between 1 and 255 characters' });
        }

        try {
            const newHotel = new Hotel({
                name,
                location,
                description,
                amenities,
                rating,
                owner,
                photos,
                rooms,
            });

            await newHotel.save();
            res.status(201).json({ message: 'Hotel created successfully', hotel: newHotel });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    updateHotelById: async (req, res) => {
        const { hotelId } = req.params;
        const { name, location, description, amenities, rating } = req.body;

        // Example input validation using the validator library
        if (!validator.isLength(name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: 'Name must be between 1 and 255 characters' });
        }

        try {
            const hotel = await Hotel.findByIdAndUpdate(
                hotelId,
                {
                    name, location, description, amenities, rating, photos,
                    rooms,
                },
                { new: true }
            );

            if (!hotel) {
                return res.status(404).json({ error: 'Hotel not found' });
            }

            res.json({ message: 'Hotel updated successfully', hotel });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deleteHotelById: async (req, res) => {
        const { hotelId } = req.params;

        try {
            const hotel = await Hotel.findByIdAndDelete(hotelId);

            if (!hotel) {
                return res.status(404).json({ error: 'Hotel not found' });
            }

            res.json({ message: 'Hotel deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = hotelController;
