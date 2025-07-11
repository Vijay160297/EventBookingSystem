
import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const EventCard = ({ event, email }) => {
  const handleBooking = async () => {
    if (!email) return alert('Enter email first');
    try {
      await axios.post('http://localhost:5000/api/book', {
        eventId: event._id,
        email,
      });
      alert('✅ Booking successful');
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
    }
  };

  const handleCancel = async () => {
    if (!email) return alert('Enter email first');
    try {
      await axios.post('http://localhost:5000/api/cancel', {
        eventId: event._id,
        email,
      });
      alert('❌ Booking cancelled');
    } catch (err) {
      alert(err.response?.data?.message || 'Cancel failed');
    }
  };

  return (
    <motion.div className="event-card" whileHover={{ scale: 1.02 }}>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <p>🗓️ {new Date(event.date).toDateString()}</p>
      <p>🎟️ Booked: {event.booked}/{event.capacity}</p>
      <button className="btn" onClick={handleBooking}>Book</button>
      <button className="btn cancel" onClick={handleCancel}>Cancel</button>
    </motion.div>
  );
};

export default EventCard;

