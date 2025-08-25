import React, { useState } from "react";
import "./home.css";

const images = [
  "/img/jordan-shoes-4k-ficsl92tmk28ie8v.jpg",
  "/img/nike-trainers-running-shoes.jpg",
  "/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-container">
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Text */}
        <div className="home-text">
          <h4>Step into shoe style</h4>
          <h1>Discover limited sneakers without limitations</h1>
          <button className="checkout-btn">Shop Now</button>
        </div>

        {/* Manual buttons */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Home;
