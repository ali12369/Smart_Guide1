const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] },
  catégories: { type: String, required: [true, "tel is required"] },
  géocodes: { type: String, required: [true, "email is required"] },
  location: { type: String, required: [true, "time is required"] },
  genre: { type: String, required: [true, "genre is required"] },
});

const serviceModel = mongoose.model("service", serviceSchema);

module.exports = serviceModel;
