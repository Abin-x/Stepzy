import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // <-- Added Link
import axios from 'axios';
import './userLogin.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSuccessMessage('');
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      emailRef.current.focus();
    } else if (!formData.password) {
      newErrors.password = 'Password is required';
      passwordRef.current.focus();
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/auth/user/login',
        {
          email: formData.email,
          password: formData.password,
        }
      );
      setSuccessMessage(res.data.message || 'Login successful!');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      setFormData({ email: '', password: '' });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || 'Something went wrong',
      });
      setSuccessMessage('');
    }
  };

  return (
    <div className="user-login-container">
      <div className="user-login-box">
        <h2>Welcome Back User</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
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

          {errors.general && <p className="error-text">{errors.general}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}

          <button type="submit">Login</button>
        </form>

        {/* Create Account Link */}
        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
