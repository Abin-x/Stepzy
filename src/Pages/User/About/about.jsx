// src/pages/About.jsx
import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-title">About Stepzy</h1>
          <p className="about-subtitle">
            Step into Comfort, Style & Performance 👟
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="about-story">
        <div className="about-image">
          <img
            src="/images/about-shoes.jpg"
            alt="Stepzy Shoes"
            className="story-img"
          />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded with passion for both fashion and fitness, <b>Stepzy</b> was
            born to revolutionize the footwear world. We believe shoes are more
            than just an accessory — they’re your partner in every journey. From
            morning jogs to late-night adventures, Stepzy ensures you move with
            confidence and style.
          </p>
          <p>
            Our designs combine comfort-driven innovation with cutting-edge
            aesthetics. Each pair is crafted using premium materials, ensuring
            lightweight performance and durability for every step you take.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To inspire movement through innovation and comfort — one step at a
          time. Stepzy strives to bring every individual the best version of
          themselves through the perfect pair of shoes.
        </p>
        <div className="mission-grid">
          <div className="mission-card">
            <i className="fas fa-shoe-prints icon"></i>
            <h3>Quality Craft</h3>
            <p>
              Each Stepzy shoe is made with precision and tested for lasting
              comfort and durability.
            </p>
          </div>
          <div className="mission-card">
            <i className="fas fa-leaf icon"></i>
            <h3>Sustainability</h3>
            <p>
              We’re committed to eco-friendly materials and reducing our carbon
              footprint with every design.
            </p>
          </div>
          <div className="mission-card">
            <i className="fas fa-heart icon"></i>
            <h3>Customer Love</h3>
            <p>
              Your comfort and confidence drive everything we create — because
              every step counts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
