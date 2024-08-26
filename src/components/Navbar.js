import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="/" className="navbar-link">Home</a></li>
        <div className="navbar-line"></div>
        <li><a href="/contacts" className="navbar-link">Contact</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
