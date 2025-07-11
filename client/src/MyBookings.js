

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './MyBookings.css';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/api/bookings?email=${email}`)
        .then((res) => {
          setBookings(res.data);
          setFiltered(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);

  useEffect(() => {
    const filteredBookings = bookings.filter((b) =>
      b.event?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredBookings);
  }, [searchTerm, bookings]);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      const updated = filtered.filter((b) => b._id !== id);
      setBookings(updated);
      setFiltered(updated);
    }
  };

  return (
    <motion.div className="mybookings-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.h2 className="mybookings-title" initial={{ y: -10 }} animate={{ y: 0 }}>
        📋 My Bookings
      </motion.h2>

      <motion.input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        whileFocus={{ scale: 1.02 }}
      />

      {bookings.length > 0 && (
        <motion.input
          type="text"
          className="email-input"
          placeholder="Search by event name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />
      )}

      <div className="bookings-list">
        {filtered.map((b, i) => (
          <motion.div
            key={b._id || i}
            className={`booking-card bg-style-${(i % 5) + 1}`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="booking-header">
              <h4>{b.event?.name}</h4>
              <span className="status-tag">✅ Booked</span>
            </div>
            <p>📅 {new Date(b.bookingDate).toLocaleString()}</p>
            <p>📍 Location: {b.event?.location || 'Not specified'}</p>

            <motion.button
              className="cancel-btn"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCancel(b._id)}
            >
              ❌ Cancel
            </motion.button>

            <motion.button
              className="book-btn"
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                navigate('/payment', {
                  state: {
                    eventName: b.event?.name,
                    location: b.event?.location,
                    bookingDate: b.bookingDate,
                  },
                })
              }
            >
              💳 Pay Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyBookings;

