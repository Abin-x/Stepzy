import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import SearchModal from '../SearchModal/searchModal';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const menuRef = useRef(null);
  const accountRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      if (!prev) {
        setAccountOpen(false);
        setDropdownOpen(false);
      }
      return !prev;
    });
  };

  const toggleAccount = () => {
    setAccountOpen(prev => {
      if (!prev) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
      return !prev;
    });
  };

  const toggleDropdown = e => {
    e.stopPropagation();
    setDropdownOpen(prev => !prev);
    setAccountOpen(false);
    // Don't close menu when toggling dropdown
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setAccountOpen(false);
    setDropdownOpen(false);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchTerm('');
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        !menuRef.current?.contains(e.target) &&
        !accountRef.current?.contains(e.target) &&
        !dropdownRef.current?.contains(e.target)
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
        {/* <div
              className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              ref={menuRef}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} icon`}></i>
            </div> */}

        {/* Logo */}
        <div className="header-logo">Stepzy</div>

        {/* Nav Links */}
        <div
          className={`header-links ${menuOpen ? 'active' : ''}`}
          onClick={e => {
            const tag = e.target.tagName.toLowerCase();
            const isFormElement =
              tag === 'input' || tag === 'button' || e.target.closest('form');

            const isDropdown = e.target.closest('.pages-dropdown');

            if (isFormElement || isDropdown) {
              return;
            }

            setMenuOpen(false);
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/kids">Kids</NavLink>

          {/* Pages Dropdown
          <div
            className="pages-dropdown"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <span className="pages-toggle">Pages ▾</span>
            <div className={`pages-menu ${dropdownOpen ? 'show' : ''}`}>
              <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>
              <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
                Wishlist
              </NavLink>
              <NavLink to="/account" onClick={() => setMenuOpen(false)}>
                Account
              </NavLink>
              <NavLink to="/admin/dashboard" onClick={() => setMenuOpen(false)}>
                AdminDashboard
              </NavLink>
            </div>
          </div> */}
          {/* <div className="searchBarDiv">
            <SearchModal />
          </div> */}
        </div>
        <div
          className="header-searchbar"
          // onClick={() => (window.location.href = '/wishlist')}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        {/* <div className="searchBarDiv"><SearchModal /></div> */}

        {/* Icons */}
        <div className="header-icons">
          {/* <SearchModal /> */}

          {/* Cart Icon */}
          <div
            className="header-magnifying-glass"
            // onClick={() => (window.location.href = '/wishlist')}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* Cart Icon */}
          <div
            className="header-wishlist"
            // onClick={() => (window.location.href = '/wishlist')}
          >
            <i className="fa-solid fa-heart"></i>
          </div>
          <div
            className="header-cart"
            // onClick={() => (window.location.href = '/cart')}
          >
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>

          <div
            className="dropdown-account"
            onClick={toggleAccount}
            ref={accountRef}
          >
            <i className="fa-solid fa-circle-user"></i>

            <div className={`dropdown-menu ${accountOpen ? 'show' : ''}`}>
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </NavLink>
              <NavLink to="#profile" onClick={() => setMenuOpen(false)}>
                Profile
              </NavLink>
              <NavLink to="#settings" onClick={() => setMenuOpen(false)}>
                Account
              </NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </NavLink>
              <NavLink to="/admin/dashboard" onClick={() => setMenuOpen(false)}>
                AdminDashboard
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
