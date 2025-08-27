import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './adminSignup.css';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSuccessMessage('');
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      nameRef.current.focus();
    } else if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      emailRef.current.focus();
    } else if (!formData.password) {
      newErrors.password = 'Password is required';
      passwordRef.current.focus();
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      passwordRef.current.focus();
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      confirmPasswordRef.current.focus();
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post(
        'http://localhost:3000/api/admin/auth/admin/signup',
        formData
      );
      setSuccessMessage(res.data.message || 'Admin account created successfully!');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });

      setTimeout(() => {
        navigate('/admin/login'); // redirect to admin login
      }, 2000);
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || 'Something went wrong',
      });
      setSuccessMessage('');
    }
  };

  return (
    <div className="admin-signup-container">
      <div className="admin-signup-box">
        <h2>Create New Admin Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            ref={emailRef}
            type="email"
            placeholder="Admin Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <input
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          {errors.general && <p className="error-text">{errors.general}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}

          <button type="submit">Sign Up</button>
        </form>

        {/* login link */}
        <p className="auth-switch-text">
          Already have an account? <Link to="/admin/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;
