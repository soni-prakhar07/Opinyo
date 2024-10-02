const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
