import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './userLogin.css';

const UserLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSuccessMessage('');
  };

  const validateForm = () => {
    let newErrors = {};
    if (isSignUp && !formData.name.trim()) {
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
    } else if (isSignUp && formData.password !== formData.confirmPassword) {
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
      if (isSignUp) {
        const res = await axios.post(
          'http://localhost:3000/api/user/auth/user/signup',
          formData
        );
        setSuccessMessage(res.data.message || 'Account created successfully!');
        setErrors({});
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });

        setTimeout(() => {
          setIsSignUp(false);
          setSuccessMessage('');
          navigate('/login');
        }, 2000);
      } else {
        const res = await axios.post(
          'http://localhost:3000/api/user/auth/user/login',
          {
            email: formData.email,
            password: formData.password,
          }
        );
        setSuccessMessage(res.data.message || 'Login successful!');
        setErrors({});
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || 'Something went wrong',
      });
      setSuccessMessage('');
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${isSignUp ? 'signup-mode' : 'signin-mode'}`}>
        {/* Left Panel */}
        <div className="auth-panel">
          {isSignUp ? (
            <>
              <h2>One of us?</h2>
              <p>Already have an account? Just sign in to continue.</p>
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setErrors({});
                  setSuccessMessage('');
                }}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2>New here?</h2>
              <p>Create your account and start your journey with us.</p>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setErrors({});
                  setSuccessMessage('');
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Right Form */}
        <div className="auth-form">
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </>
            )}

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

            {isSignUp && (
              <>
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
              </>
            )}

            {errors.general && <p className="error-text">{errors.general}</p>}
            {successMessage && <p className="success-text">{successMessage}</p>}

            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
