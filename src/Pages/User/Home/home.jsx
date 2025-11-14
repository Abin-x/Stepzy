import React from 'react';
import Shop from '../Shop/shop.jsx';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        
        {/* Banner Section */}
        <div className="home-banner">
          <div className="home-text">
            <h4>Step into shoe style</h4>
            <h1>Discover limited sneakers without limitations</h1>
            <button className="checkout-btn">Shop Now</button>
          </div>
        </div>

        {/* Products Section */}
        <Shop />
      </div>
    </>
  );
};

export default Home;
