const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] },
  categories: { type: String, required: [true, "tel is required"] },
  geocodes: { type: String, required: [true, "email is required"] },
  location: { type: String, required: [true, "time is required"] },
  genre: { type: String, required: [true, "genre is required"] },
});

const hotelModel = mongoose.model("hotel", hotelSchema);
module.exports = hotelModel;
