import Booking from '../models/Booking.js';



export const registerBooking = async (req, res,) => {


    const { user, hotel, room, checkInData, chexkOutData, numberOfGuests, status, paymentStatus } = req.body

    // add to the database
    try {
        const booking = await Booking.create({ user, hotel, room, checkInData, chexkOutData, numberOfGuests, status, paymentStatus })
        res.status(200).json(booking)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
