import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../styles/Header.css";
import logo from "../../assets/landing-page-images/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on navigation
  const handleNavigation = (path) => {
    setDropdown(null);  // Close dropdown
    setMenuOpen(false); // Close mobile menu
    navigate(path);
  };

  const toggleDropdown = (menu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-left">
        <Link to="/" className="logo-link" onClick={() => setDropdown(null)}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Resume Dropdown */}
        <div className="dropdown-wrapper">
          <button className="nav-btn" onClick={() => toggleDropdown("resume")}>
            Resume ▾
          </button>
          {dropdown === "resume" && (
            <Dropdown 
              items={["Templates", "Examples", "Tips"]} 
              onItemClick={() => setDropdown(null)} 
            />
          )}
        </div>

        {/* Cover Letter Dropdown */}
        <div className="dropdown-wrapper">
          <button className="nav-btn" onClick={() => toggleDropdown("coverLetter")}>
            Cover Letter ▾
          </button>
          {dropdown === "coverLetter" && (
            <Dropdown 
              items={["Templates", "Samples", "Tips"]} 
              onItemClick={() => setDropdown(null)} 
            />
          )}
        </div>

        {/* Blog Dropdown */}
        <div className="dropdown-wrapper">
          <button className="nav-btn" onClick={() => toggleDropdown("blog")}>
            Blog ▾
          </button>
          {dropdown === "blog" && (
            <Dropdown 
              items={["Career Advice", "Success Stories", "News"]} 
              onItemClick={() => setDropdown(null)} 
            />
          )}
        </div>

        {/* Navigation Links */}
        <Link to="/pricing" onClick={() => handleNavigation("/pricing")}>Pricing</Link>
        <Link to="/organizations" onClick={() => handleNavigation("/organizations")}>For Organizations</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/signin" className="btn-outline" onClick={() => handleNavigation("/signin")}>Sign in</Link>
        <Link to="/get-started" className="btn" onClick={() => handleNavigation("/get-started")}>Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;