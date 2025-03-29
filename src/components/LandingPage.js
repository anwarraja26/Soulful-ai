import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import content from "../data/Content";
import "../styles/LandingPage.css";
import image1 from "../assets/landing-page-images/robot.jpg"; 
import image2 from "../assets/landing-page-images/resume1.png";
import ResumeCarousel from "./ResumeCarousel";

const LandingPage = () => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setIsRotating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="landing-page" aria-label="Landing Page">
      <section className="hero-section">
        <div className="title">
          <h1>
            Analyka's <span className="highlight">Resume Builder</span> helps you get hired at top companies
          </h1>
          
          {/* Navigation Buttons */}
          <div className="buttons" aria-label="Navigation Buttons">
            <Link to="/build-resume" className="btn btn-primary">
              {content.buttons.buildResume}
            </Link>
            <Link to="/resume-score" className="btn btn-secondary">
              {content.buttons.resumeScore}
            </Link>
          </div>

          {/* Resume Carousel Navigation */}
          <div className="carousel-nav" aria-label="Resume Carousel Navigation">
            <Link to="/templates" className="btn btn-highlight">
              Explore Templates
            </Link>
          </div>
        </div>

        {/* Rotating Image Animation */}
        <div className={`rotating-image-container ${isRotating ? "rotating" : ""}`}>
          <img 
            src={image1} 
            alt="Resume Preview 1" 
            className="rotating-image"
            loading="lazy"
          />
          <img 
            src={image2} 
            alt="Resume Preview 2" 
            className="rotating-image"
            loading="lazy"
          />
        </div>
      </section>

      {/* Company Logos */}
      <section className="companies" aria-label="Company Logos">
        <h2>Loved by interviewers at</h2>
        <div className="company-logos">
          {content.companies.map((company, index) => (
            <img 
              key={index} 
              src={company.logo} 
              alt={company.name} 
              className="company-logo"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Resume Templates Carousel */}
      <section className="template-section" aria-label="Resume Templates Carousel">
        <ResumeCarousel />
      </section>

      {/* Footer */}
      <footer aria-label="Footer">
        <p> 2025 Analyka Resume Builder. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default LandingPage;
