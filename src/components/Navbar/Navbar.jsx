
import React, { useState } from 'react';
import './Navbar.css';

import logo from '../../assets/images/talk-smart-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="tricolor-line"></div>

      <div className="container nav-container">

        <a href="/#home" className="nav-logo" aria-label="Talk Smart home" onClick={closeMenu}>
          <img src={logo} alt="Talk Smart English Training Dharamshala logo" />
        </a>

        <button
          className="menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

       <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><a href="/" onClick={closeMenu}>Home</a></li>
  <li><a href="/about" onClick={closeMenu}>About</a></li>
  <li><a href="/courses" onClick={closeMenu}>Courses</a></li>
  <li><a href="/exams" onClick={closeMenu}>Exams</a></li>
  <li><a href="/contact" className="nav-cta" onClick={closeMenu}>Contact</a></li>
</ul>

      </div>
    </header>
  );
};

export default Navbar;
