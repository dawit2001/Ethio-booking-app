import Booking from '../models/Booking';

// Validate the request data before processing
const validateBookingData = (data) => {
    const {
        user,
        hotel,
        room,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        status,
        paymentStatus,
    } = data;

    if (
        !user ||
        !hotel ||
        !room ||
        !checkInDate ||
        !checkOutDate ||
        !numberOfGuests ||
        !status ||
        !paymentStatus
    ) {
        throw new Error('All fields are required');
    }

    // You can add more specific validation logic if needed

    return {
        user,
        hotel,
        room,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        status,
        paymentStatus,
    };
};

export const registerBooking = async (req, res, next) => {
    try {
        const bookingData = validateBookingData(req.body);

        // Additional business logic or validation can be added here before creating the booking

        // Example: If the status is 'confirmed', set paymentStatus to 'completed'
        if (bookingData.status === 'confirmed') {
            bookingData.paymentStatus = 'completed';
        }

        // Example: If the status is 'canceled', set paymentStatus to 'failed'
        if (bookingData.status === 'canceled') {
            bookingData.paymentStatus = 'failed';
        }

        const newBooking = new Booking(bookingData);

        const savedBooking = await newBooking.save();

        res.status(201).json(savedBooking);
    } catch (error) {
        console.error(error.message);

        // Handle specific validation errors
        if (error.message.includes('All fields are required')) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Handle other types of errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
