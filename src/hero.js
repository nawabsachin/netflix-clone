import React from 'react';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, <br></br>TV shows and more</h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <button className="play-button">▶️ Play</button>
        <button className="info-button">
        <ScrollLink to="myList" smooth={true} duration={500}>
        ℹ️ More Info
        </ScrollLink>

        </button>
      </div>
    </div>
  );
}

export default Hero;
