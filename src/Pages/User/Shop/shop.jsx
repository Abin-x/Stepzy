import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './shop.css';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Track wishlist items
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products/get');
      setProducts(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Wishlist toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">⚠️ {error}</div>;

  return (
    <div className="shop-main-container">
      <div className="shop-container">
        <h1 className="shop-title">🛍️ Our Shop</h1>

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                {/* ✅ Action Icons */}
                <div className="card-icons">
                  <button
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product._id);
                    }}
                  >
                    {wishlist.includes(product._id) ? (
                      <FaHeart className="wishlist-icon filled" />
                    ) : (
                      <FaRegHeart className="wishlist-icon" />
                    )}
                  </button>
{/* 
                  <button
                    className="cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Added "${product.name}" to cart`);
                    }}
                  >
                    <FaShoppingCart className="cart-icon" />
                  </button> */}
                </div>

                {/* ✅ Image */}
                <img
                  src={product.image || '/placeholder.jpg'}
                  alt={product.name}
                  className="product-image"
                  onClick={() => navigate(`/shop/${product._id}`)}
                />

                {/* ✅ Info */}
                <div
                  className="product-info"
                  onClick={() => navigate(`/shop/${product._id}`)}
                >
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">₹{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
