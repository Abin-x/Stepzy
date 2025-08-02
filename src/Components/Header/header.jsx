import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-navbar">
        <div className="header-logo">Stepzy</div>

        <div
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} icon`}></i>
        </div>

        <div
          className={`header-links ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        >
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
