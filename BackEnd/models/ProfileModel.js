const mongoose = require('mongoose');
// schema creating for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  vehicleData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  },
  fname: {
    type: String
  },
  mname: {
    type: String
  },
  lname: {
    type: String
  },
  vehicleregno: {
    type: String
  },
  insuranceid: {
    type: String
  },
  address: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String
  }
});

module.exports = userSchema;