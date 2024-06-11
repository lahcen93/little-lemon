import React from 'react';
import logo from './assets/logo1.png'; // Adjust the path as necessary
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="footer-section doormat-navigation">
        <h2>Doormat Navigation</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h2>Contact</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        <p>Address: 123 Lemon Street, Citrusville, CA 90210</p>
      </div>
      <div className="footer-section social-media">
        <h2>Social Media Links</h2>
        <ul>
          <li><a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com/company/littlelemon" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://pinterest.com/littlelemon" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
