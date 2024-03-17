// evModel.js

const mongoose = require('mongoose');

// Define schema for Electric Vehicle (EV)
const evSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  range: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create EV model using the schema
const EV = mongoose.model('EV', evSchema);

module.exports = EV;
