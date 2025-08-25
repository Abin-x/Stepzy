import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
     <div className="home-container">
  <div className="home-banner">
    <div className="home-text">
      <h1>Make Your <br /> Style</h1>
      <p>
        Stand out with Nike shoes <br />
        that make your style more premium
      </p>
      <h3>
        Start from <span className="price">₹4,999</span>
      </h3>
      <div className="home-buttons">
        <button className="btn-outline">More Products</button>
        <button className="btn-filled">Shop Now</button>
      </div>
    </div>

    <div className="home-image">
      <img
        src="/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg"
        alt="Nike Shoe"
      />
    </div>
  </div>
</div>

     
    </>
  );
};

export default Home;
