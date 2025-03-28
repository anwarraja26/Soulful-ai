import React from "react";
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/landing-page-images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
  <h4>Get started</h4>
  <a href="#create-resume" className="highlight">Create Resume</a>
  <a href="#pricing">Pricing</a>
  <a href="#terms">Terms of Service</a>
  <a href="#privacy">Privacy Policy</a>
  <a href="#cookie-preferences">Cookie Preferences</a>
</div>

        <div className="footer-section">
          <h4>About us</h4>
          <a href="#company">Company</a>
          <a href="#careers">Careers</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <a href="mailto:support@enhancv.com">support@enhancv.com</a>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
          <a href="#help">Help</a>
        </div>

        <div className="footer-section">
          <h4>Languages</h4>
          <a href="#english">English (UK)</a>
          <a href="#french">French (FR)</a>
          <a href="#german">German (DE)</a>
          <a href="#spanish">Spanish (ES)</a>
          <a href="#swedish">Swedish (SE)</a>
          <a href="#portuguese">Portuguese (BR)</a>
          <a href="#italian">Italian (IT)</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>Designed with passion, built with care. © 2025. All rights reserved.</p>
        <img src={logo} alt="Logo" className="logo-images" />
      </div>
    </footer>
  );
};

export default Footer;