import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" 
        className="logo"
      />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="profile-icon">👤</div>
    </header>
  );
}

export default Header;
