import React from 'react';
import './Footer.css';
import logo from '../../assets/images/talk-smart-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Logo and description */}
          <div className="footer-column">
            <img
              className="footer-logo"
              src={logo}
              alt="Talk Smart logo"
            />
            <p>Talk Smart English Training Dharamshala</p>
           
          </div>

        


          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Phone: +91 8091580801</p>
            <p>Email: talksmart144@gmail.com</p>
            <p>
              59, Civil Lines, above Food Plaza Restaurant, near KCC Bank
              Head Office, Chilgari, Dharamshala, Himachal Pradesh 176215
            </p>
          </div>

          
          {/* Social Media */}
<div className="footer-column">
  <h3>Follow Us</h3>

  <a
    href="https://www.facebook.com/profile.php?id=61595438662227"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa-brands fa-facebook"></i>
    Facebook
  </a>

  <a
    href="https://www.instagram.com/_talksmartenglish/"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa-brands fa-instagram"></i>
    Instagram
  </a>

  <a
    href="https://www.linkedin.com/in/talk-smart-undefined-49b402444/?isSelfProfile=true"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa-brands fa-linkedin"></i>
    LinkedIn
  </a>
</div>

         

          {/* Copyright */}
          <div className="copyright">
            <p>© 2026 Talk Smart English Training Dharamshala. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;