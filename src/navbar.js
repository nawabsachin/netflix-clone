// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import the Link component from react-scroll
import './Navbar.css';
import AuthForm from './AuthForm';

function Navbar() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add an event listener to change the navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className={`navbar ${show && 'navbar-black'}`}>
      <div className="navbar-logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo"
        />
      </div>
      <div className="navbar-links">
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="tvShows" smooth={true} duration={500}>
          TV Shows
        </ScrollLink>
        <ScrollLink to="movies" smooth={true} duration={500}>
          Movies
        </ScrollLink>
        <ScrollLink to="newAndPopular" smooth={true} duration={500}>
          New & Popular
        </ScrollLink>
        <ScrollLink to="myList" smooth={true} duration={500}>
          My List
        </ScrollLink>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="navbar-search" />
        <button onClick={toggleModal} className="Btn">
  
  <div className="sign">
  <span class="material-symbols-outlined" >

    
login
</span>
  </div>
  
  <div className="text">Login</div>
</button>
        <div className="navbar-profile">👤</div>
      </div>
      {isModalOpen && <AuthForm toggleModal={toggleModal} />}


    
    </nav>
  );
}

export default Navbar;
