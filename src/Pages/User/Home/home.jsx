import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
     <div className="home-container">
  <div className="home-banner-img">
    <img
      src="/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg"
      alt="Home Banner"
    />
    <div className="home-banner-overlay">
      <h1>Step Into Style</h1>
      <p>Find the perfect pair for your next move</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </div>
</div>

     
    </>
  );
};

export default Home;
