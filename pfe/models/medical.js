const mongoose = require("mongoose");

const medicalSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  categories: { type: String, required: [true, "categories is required"] },
  geocodes: { type: String, required: [true, "geocodes is required"] },
  location: { type: String, required: [true, "location is required"] },
});

const medicalModel = mongoose.model("medical", medicalSchema);
module.exports = medicalModel;
