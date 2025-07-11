

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyBookings from './MyBookings';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 import Navbar from './Navbar';
 import PaymentPage from './PaymentPage';


const App = () => {
  return (
    <Router>
        <Navbar />
      <div style={{ padding: '20px' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<MyBookings />} />
           <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
