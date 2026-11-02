import React from 'react';
import './Navbar.css';

import logo from '../../assets/images/talk-smart-logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="tricolor-line"></div>

      <div className="container nav-container">

        <a href="/#home" className="nav-logo" aria-label="Talk Smart home">
          <img src={logo} alt="Talk Smart English Training Dharamshala logo" />
        </a>

        <button className="menu-btn" id="menuBtn" aria-label="Open menu">
          ☰
        </button>

        <ul className="nav-links" id="navLinks">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#courses">Courses</a>
          <a href="/#exams">Exams</a>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>

      </div>
    </header>
  );
};

export default Navbar;