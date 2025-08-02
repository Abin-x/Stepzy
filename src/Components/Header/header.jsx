import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const menuRef = useRef(null);
  const accountRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (!prev) setAccountOpen(false); // Close account if menu is opening
      return !prev;
    });
  };

  const toggleAccount = () => {
    setAccountOpen((prev) => {
      if (!prev) setMenuOpen(false); // Close menu if account is opening
      return !prev;
    });
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setAccountOpen(false);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !accountRef.current?.contains(e.target)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="header-container">
      <div className="header-navbar">
        {/* Hamburger */}
        <div
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          ref={menuRef}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} icon`}></i>
        </div>

        {/* Logo */}
        <div className="header-logo">Stepzy</div>

        {/* Nav Links */}
        <div
          className={`header-links ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#contact">Contact</NavLink>
        </div>

        {/* Account Dropdown */}
        <div
          className="dropdown-account"
          onClick={toggleAccount}
          ref={accountRef}
        >
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
