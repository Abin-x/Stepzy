import React, { useState } from 'react';
import axios from 'axios';
import './userLogin.css';

const userLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const res = await axios.post(
          'http://localhost:3000/api/user/auth/user/signup',
          formData
        );
        alert(res.data.message);
      } else {
        const res = await axios.post('http://localhost:3000/api/user/auth/user/login', {
          email: formData.email,
          password: formData.password,
        });
        alert(res.data.message);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
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
              <button onClick={() => setIsSignUp(false)}>Sign In</button>
            </>
          ) : (
            <>
              <h2>New here?</h2>
              <p>Create your account and start your journey with us.</p>
              <button onClick={() => setIsSignUp(true)}>Sign Up</button>
            </>
          )}
        </div>

        {/* Right Form */}
        <div className="auth-form">
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>

          <p>Or sign {isSignUp ? 'up' : 'in'} with</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userLogin;
