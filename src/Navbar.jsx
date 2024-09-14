import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src='./BridgeLogo.png' alt="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Pricing</a></li>
          <li className="collapse-btns"><button className="login-btn">Log in</button></li>
          <li className="collapse-btns"><button className="signup-btn collapse-btn">Get Started <span>&gt;</span></button></li>
        </ul>
      </div>
      
      <div className="nav-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Get Started <span>&gt;</span></button>
      </div>
    </div>
  );
};

export default Navbar;
