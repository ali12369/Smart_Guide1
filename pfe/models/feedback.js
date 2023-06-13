const mongoose = require("mongoose");

const reclamation = new mongoose.Schema({
  firstName: { type: String, required: [true, "first name is required"] },
  lastName: { type: String, required: [true, "last name is required"] },
  email: { type: String, required: [true, "email is required"] },
  msg: { type: String, required: [true, "message is required"] },
});

const feedbackModel = mongoose.model("reclamation", reclamation);
module.exports = feedbackModel;
