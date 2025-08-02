import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import SearchModal from '../SearchModal/searchModal.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const menuRef = useRef(null);
  const accountRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (!prev) setAccountOpen(false);
      return !prev;
    });
  };

  const toggleAccount = () => {
    setAccountOpen((prev) => {
      if (!prev) setMenuOpen(false);
      return !prev;
    });
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setAccountOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchTerm('');
  };

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
          <NavLink to="#shop">Shop</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#contact">Contact</NavLink>

          {/* Pages Dropdown */}
          <div className="pages-dropdown">
            <span className="pages-toggle">Pages ▾</span>
            <div className="pages-menu">
              <NavLink to="/cart">Cart</NavLink>
              <NavLink to="/wishlist">Wishlist</NavLink>
              <NavLink to="/account">Account</NavLink>
            </div>
          </div>

          {/* Search input inside menu (mobile view) */}
          {menuOpen && (
            <form className="mobile-search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
              />
              <button type="submit">Go</button>
            </form>
          )}
        </div>

        {/* Icons */}
        <div className="header-icons">
          {/* Hide Search Icon when menu is open */}
          {!menuOpen && <SearchModal />}

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
              <NavLink to="#settings" onClick={() => setAccountOpen(false)}>
                Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
