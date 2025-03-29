import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignPage.css";
import logo from "../assets/landing-page-images/logo.png"; // Assuming you have a logo

const SignPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: ""
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (isSignUp) {
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords don't match";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission - connect to your auth service
      console.log("Form submitted:", formData);
      // Redirect to dashboard or home page after successful auth
    }
  };

  return (
    <div className="sign-page">
      <div className="sign-container">
        <div className="sign-header">
          <img src={logo} alt="Analyka Logo" className="logo" />
          <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
          <p>{isSignUp 
            ? "Start building your professional resume today" 
            : "Sign in to continue building your resume"}
          </p>
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          )}

          {!isSignUp && (
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          )}

          <button type="submit" className="btn-sign">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="sign-toggle">
          <p>
            {isSignUp 
              ? "Already have an account?" 
              : "Don't have an account yet?"}
            <button 
              className="toggle-btn" 
              onClick={toggleForm}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        <div className="social-sign">
          <p>Or continue with</p>
          <div className="social-buttons">
            <button className="social-btn google">
              <i className="google-icon"></i>
              Google
            </button>
            <button className="social-btn linkedin">
              <i className="linkedin-icon"></i>
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;                                        