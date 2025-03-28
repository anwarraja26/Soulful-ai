import React from "react";
import { useNavigate } from "react-router-dom";  // Import navigation hook
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/LandingPage.css";

// Import images
import resume1 from "../assets/landing-page-images/resume1.png";
import resume2 from "../assets/landing-page-images/resume2.png";
import resume3 from "../assets/landing-page-images/resume3.png";
import resume4 from "../assets/landing-page-images/resume4.png";
import resume5 from "../assets/landing-page-images/resume5.png";
import resume6 from "../assets/landing-page-images/resume1.png";
import resume7 from "../assets/landing-page-images/resume2.png";
import resume8 from "../assets/landing-page-images/resume3.png";
import resume9 from "../assets/landing-page-images/resume4.png";
import resume10 from "../assets/landing-page-images/resume5.png";

const ResumeCarousel = () => {
  const navigate = useNavigate();
  
  const resumes = [resume1, resume2, resume3, resume4, resume5, resume6, resume7, resume8, resume9, resume10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleSelectTemplate = (index) => {
    navigate(`/editor/${index}`);  // Navigate to the editor with selected template
  };

  return (
    <div className="carousel-container">
      <h1 className="slider_head">Pick a resume template and build your resume in minutes!</h1>
      <Slider {...settings}>
        {resumes.map((src, index) => (
          <div key={index} className="resume-slide">
            <div className="resume-card">
              <img src={src} alt={`Resume ${index + 1}`} className="resume-image" />
              <div className="template-action">
                <button 
                  className="template-btn" 
                  onClick={() => handleSelectTemplate(index)}
                >
                  Start with This Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResumeCarousel;
