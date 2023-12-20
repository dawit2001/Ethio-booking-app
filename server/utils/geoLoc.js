const axios = require("axios");

const Geocoder = async (req, res, next) => {
  const apiKey = process.env.MAP_API_KEY; // Replace with your Bing Maps API key
  const address = `${req.body.name}, ${req.body.streetAddress},${req.body.city},${req.body.country}`;
  console.log(address);

  const bingMapsUrl = `http://dev.virtualearth.net/REST/v1/Locations?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(bingMapsUrl);
    const data = await response.data.resourceSets[0].resources[0].point
      .coordinates;
    console.log(data);
    req.location = data;
    next();
  } catch (e) {
    console.error("Error:", e.message);
  }
};

module.exports = { Geocoder };
