import React, { useState } from 'react';
import AddProductForm from './AddProductForm/AddProductForm.jsx';
import ProductList from '../../User/ProdcutList/productList.jsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('addProduct');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminId');
    window.location.href = '/admin/login';
  };

  return (
    <div className="dashboard-container">
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2 className="logo">Admin Panel</h2>
        <nav className="menu">
          <button
            className={activePage === 'addProduct' ? 'active' : ''}
            onClick={() => {
              setActivePage('addProduct');
              setMenuOpen(false);
            }}
          >
            ➕ Add Product
          </button>
          <button
            className={activePage === 'productList' ? 'active' : ''}
            onClick={() => {
              setActivePage('productList');
              setMenuOpen(false);
            }}
          >
            📦 Product List
          </button>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* Hamburger button (only on mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Main Content */}
      <main className="main-content">
        {activePage === 'addProduct' && <AddProductForm />}
        {activePage === 'productList' && <ProductList />}
      </main>
    </div>
  );
};

export default AdminDashboard;
