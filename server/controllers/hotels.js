const { create } = require("handlebars");
const { createError } = require("../utils/error.js");
const { prisma } = require("../utils/prisma.js");

const getHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id: parseInt(id) },
    });
    const hotelimage = await prisma.hotelImages.findFirst({
      where: { hotelId: parseInt(id) },
    });
    res.status(200).json({ ...hotel, imageUrl: hotelimage.url });
  } catch (e) {
    next(e);
  } finally {
    prisma.$disconnect();
  }
};
const registerHotel = async (req, res, next) => {
  const { imageUrl, rating, ...body } = req.body;

  const [long, lat] = req.location;
  try {
    const hotel = await prisma.hotel.create({
      data: { ...body, rating: parseInt(rating), long, lat, ownerId: 1 },
    });
    const hotelImage = await prisma.hotelImages.create({
      data: { url: imageUrl, hotelId: hotel.id },
    });
    res.status(201).send("successfully created");
  } catch (e) {
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};
const uploadHotelImage = async (req, res, next) => {
  if (!req.file) {
    next(createError(400, "No file was uploaded"));
  }
  try {
    const { filename } = req.file;
    const fileUrl = `http://localhost:4000/hotels/uploads/${filename}`;
    res.status(200).json({ url: fileUrl });
  } catch (e) {
    next(e);
  }
};
const getTopStays = async (req, res, next) => {
  try {
    const hotels = await prisma.hotel.findMany({ take: 6 });
    const hotelPics = await Promise.all(
      hotels.map(
        async (hotel) =>
          await prisma.hotelImages.findFirst({ where: { hotelId: hotel.id } })
      )
    );
    res.status(200).send(
      hotels.map((hotel, i) => ({
        ...hotel,
        imageUrl: hotelPics[i] ? hotelPics[i].url : null,
      }))
    );
  } catch (e) {
    next(e);
  }
};
const searchHotel = async (req, res, next) => {
  const { q } = req.query;

  try {
    const result = await prisma.hotel.findMany({
      where: {
        OR: [
          { name: { contains: q } },
          { city: { contains: q } },
          { country: { contains: q } },
          { streetAddress: { contains: q } },
        ],
      },
    });
    const hotelPics = await Promise.all(
      result.map(
        async (hotel) =>
          await prisma.hotelImages.findFirst({ where: { hotelId: hotel.id } })
      )
    );
    res.status(200).send(
      result.map((hotel, i) => ({
        ...hotel,
        imageUrl: hotelPics[i] ? hotelPics[i].url : null,
      }))
    );
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  registerHotel,
  uploadHotelImage,
  searchHotel,
  getHotel,
  getTopStays,
};
