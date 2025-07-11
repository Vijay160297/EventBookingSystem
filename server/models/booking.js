// server/models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventName: String,
  userName: String,
  email: String,
  location: String,
  date: String,
  seats: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);
