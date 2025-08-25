import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavBar.css';

function MobileNavBar() {
  return (
    <div className="mobile-bottom-nav">
      <NavLink to="/" className="nav-item">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/shop" className="nav-item">
        <i className="fas fa-shop"></i>
        <span>Shop</span>
      </NavLink>
       <NavLink to="/you" className="nav-item">
        <i className="fas fa-user"></i>
        <span>Account</span>
      </NavLink>
      <NavLink to="/cart" className="nav-item">
        <i className="fas fa-shopping-cart"></i>
        <span>Cart</span>
      </NavLink>
      <NavLink to="/wishlist" className="nav-item">
        <i className="fas fa-heart"></i>
        <span>Wishlist</span>
      </NavLink>
     
      {/* <NavLink to="/menu" className="nav-item">
        <i className="fas fa-bars"></i>
        <span>Menu</span>
      </NavLink> */}
    </div>
  );
}

export default MobileNavBar;
