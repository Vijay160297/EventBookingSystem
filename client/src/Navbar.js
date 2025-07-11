import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎫 EventBook</div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/my-bookings"
            className={location.pathname === '/my-bookings' ? 'active' : ''}
          >
            My Bookings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
