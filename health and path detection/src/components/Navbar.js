import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Byte Busters</div>
      <div className="navbar-links">
        <Link to="/">Optimal Routes</Link>
        <Link to="/dashboard">Health Check Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
