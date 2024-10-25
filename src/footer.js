import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links">
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Corporate Information</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
