import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleAccount = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <div className="header-container">
      <div className="header-navbar">
        {/* Hamburger */}
        <div
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} icon`}></i>
        </div>

        {/* Logo */}
        <div className="header-logo">Stepzy</div>

        
        {/* Nav Links */}
        <div className={`header-links ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#contact">Contact</NavLink>
        </div>

        {/* Account Icon */}
        <div className="dropdown-account" onClick={toggleAccount}>
          <i className="fas fa-user icon"></i>
          <div className={`dropdown-menu ${accountOpen ? 'show' : ''}`}>
            <NavLink to="#login" onClick={() => setAccountOpen(false)}>
              Login
            </NavLink>
            <NavLink to="#profile" onClick={() => setAccountOpen(false)}>
              Profile
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
