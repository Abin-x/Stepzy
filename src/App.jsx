import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header.jsx';
import MobileNavBar from './Components/MobileNavBar/MobileNavBar.jsx';
import Home from './Pages/User/Home/home';
import UserLogin from './Components/Auth/User/userLogin.jsx';
import UserSignUp from './Components/Auth/User/userSignup.jsx';
import AdminLogin from './Components/Auth/Admin/adminLogin.jsx';
import AdminSignup from './Components/Auth/Admin/adminSignup.jsx';
import Dashboard from './Pages/Admin/Dashboard/AddProductForm/addProductForm.jsx';
import AddProductForm from './Pages/Admin/Dashboard/AddProductForm/addProductForm.jsx';
import ProductList from './Pages/User/ProdcutList/productList.jsx';
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard.jsx';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} /> */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/add-product" element={<AddProductForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <MobileNavBar />
    </div>
  );
};

export default App;
