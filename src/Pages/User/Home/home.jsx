import React, { useState } from 'react';
import './home.css';

const productsData = [
  {
    id: 1,
    name: 'Nike Air Max Red/Yellow',
    price: 6999,
    image: '/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg',
  },
  {
    id: 2,
    name: 'Nike Running Trainer',
    price: 5499,
    image: '/img/nike-trainers-running-shoes.jpg',
  },
  {
    id: 3,
    name: 'Nike Classic Runner',
    price: 4999,
    image: '/img/nike-trainers-running-shoes.jpg',
  },
  {
    id: 4,
    name: 'Nike Air Black/Yellow',
    price: 7199,
    image: '/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg',
  },
  {
    id: 5,
    name: 'Nike Sport Edition',
    price: 6499,
    image: '/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg',
  },
  {
    id: 6,
    name: 'Nike HyperRun',
    price: 8299,
    image: '/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg',
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filterProducts = () => {
    return productsData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'below6000' && product.price < 6000) ||
        (priceFilter === '6000to7000' && product.price >= 6000 && product.price <= 7000) ||
        (priceFilter === 'above7000' && product.price > 7000);
      return matchesSearch && matchesPrice;
    });
  };

  return (
    <>
      <div className="home-container">
        <div className="home-banner-img">
          <img
            src="/img/red_yellow_nike_shoe_in_black_background_4k_8k_hd_nike-3840x2160.jpg"
            alt="Home Banner"
          />
        </div>
      </div>

      <div className="product-list-container">
        <h2 className="product-heading">Our Latest Shoes</h2>

        <div className="filter-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="price-filter"
          >
            <option value="all">All Prices</option>
            <option value="below6000">Below ₹6000</option>
            <option value="6000to7000">₹6000 - ₹7000</option>
            <option value="above7000">Above ₹7000</option>
          </select>
        </div>

        <div className="product-grid">
          {filterProducts().map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
