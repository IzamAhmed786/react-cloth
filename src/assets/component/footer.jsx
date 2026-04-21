import React from "react";
import "./Footer.css";

function Footer() {

  
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="logo">Izam Store</h2>
          <p>Premium quality fashion at affordable prices.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>
          <a href="#">FAQ</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Izam. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;