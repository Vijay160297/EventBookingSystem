
// PaymentPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handlePayment = (method) => {
    setMessage(`✅ ${method} Payment Successful`);
    setTimeout(() => {
      navigate('/'); // Redirect to homepage or bookings
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>💳 Payment for: {state?.eventName}</h2>
      <p>📍 Location: {state?.location}</p>
      <p>🗓️ Date: {new Date(state?.date).toLocaleString()}</p>

      {message ? (
        <h3 style={{ color: 'green' }}>{message}</h3>
      ) : (
        <div className="payment-options">
          <button onClick={() => handlePayment('Cash on Delivery')}>💵 Cash on Delivery</button>
          <button onClick={() => handlePayment('UPI Transaction')}>📲 UPI</button>
          <button onClick={() => handlePayment('QR Code')}>📷 QR Code</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

