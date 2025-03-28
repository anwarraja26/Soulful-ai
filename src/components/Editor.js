import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import "../styles/Editor.css";
import profileImage from "../assets/landing-page-images/robot.jpg";
import {
  FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaBriefcase,
  FaGraduationCap, FaUser, FaStar, FaLanguage
} from "react-icons/fa";

const Editor = () => {
  const [resumeData, setResumeData] = useState({
    name: "RICHARD SANCHEZ",
    jobTitle: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@mywebsite.com",
      address: "123 Anywhere St, Any City",
      website: "www.reallygreatsite.com",
    },
    skills: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
      "Digital Marketing",
    ],
    languages: ["English (Fluent)", "French (Intermediate)", "German (Basic)"],
    reference: {
      name: "Estelle Darcy",
      title: "Wanderlace Inc. / CTO",
      phone: "+123-456-7890",
      email: "hello@mywebsite.com",
    },
    profile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    experience: [
      {
        company: "Borcelite Studio",
        role: "Marketing Manager & Specialist",
        years: "2020 - PRESENT",
        details: [
          "Develop marketing strategies.",
          "Lead a high-performing team.",
          "Collaborate across networks.",
        ],
      },
      {
        company: "Fauget Studio",
        role: "Marketing Manager & Specialist",
        years: "2025 - 2029",
        details: [
          "Manage marketing budgets efficiently.",
          "Discover trends and improve ROI.",
          "Collaborate with teams.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "Wardience University",
        years: "2029 - 2031",
        gpa: "GPA: 3.8 / 4.0",
      },
      {
        degree: "Bachelor of Business Management",
        school: "Wardience University",
        years: "2025 - 2029",
        gpa: "GPA: 3.8 / 4.0",
      },
    ],
  });

  const handleExportPDF = () => {
    const element = document.getElementById("resume-container");
    html2pdf().from(element).save("resume.pdf");
  };

  const handleInlineEdit = (field, subField = null, index = null, detailIndex = null) => (e) => {
    const value = e.target.textContent;

    setResumeData((prev) => {
      const updatedData = { ...prev };

      if (subField) {
        if (index !== null && detailIndex === null) {
          updatedData[subField][index] = value;
        } else if (detailIndex !== null) {
          updatedData[subField][index].details[detailIndex] = value;
        } else {
          updatedData[field][subField] = value;
        }
      } else {
        updatedData[field] = value;
      }

      return updatedData;
    });
  };

  return (
    <div className="resume-wrapper">
      <div id="resume-container" className="resume">

        {/* Left Sidebar */}
        <div className="resume-sidebar">
          <div className="profile-section">
            <img src={profileImage} alt="Profile" className="profile-pic" />
          </div>

          <div className="contact">
            <h3><FaUser /> CONTACT</h3>
            <p contentEditable onBlur={handleInlineEdit('contact', 'phone')}><FaPhone /> {resumeData.contact.phone}</p>
            <p contentEditable onBlur={handleInlineEdit('contact', 'email')}><FaEnvelope /> {resumeData.contact.email}</p>
            <p contentEditable onBlur={handleInlineEdit('contact', 'address')}><FaMapMarkerAlt /> {resumeData.contact.address}</p>
            <p contentEditable onBlur={handleInlineEdit('contact', 'website')}><FaGlobe /> {resumeData.contact.website}</p>
          </div>

          <div className="skills">
            <h3><FaStar /> SKILLS</h3>
            <ul>
              {resumeData.skills.map((skill, index) => (
                <li key={index} contentEditable onBlur={handleInlineEdit('skills', null, index)}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="languages">
            <h3><FaLanguage /> LANGUAGES</h3>
            <ul>
              {resumeData.languages.map((lang, index) => (
                <li key={index} contentEditable onBlur={handleInlineEdit('languages', null, index)}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="reference">
            <h3><FaUser /> REFERENCE</h3>
            <p contentEditable onBlur={handleInlineEdit('reference', 'name')}>{resumeData.reference.name}</p>
            <p contentEditable onBlur={handleInlineEdit('reference', 'title')}>{resumeData.reference.title}</p>
            <p contentEditable onBlur={handleInlineEdit('reference', 'phone')}>{resumeData.reference.phone}</p>
            <p contentEditable onBlur={handleInlineEdit('reference', 'email')}>{resumeData.reference.email}</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="resume-content">
          <header className="header">
            <h1 contentEditable onBlur={handleInlineEdit('name')}>{resumeData.name}</h1>
            <h2 contentEditable onBlur={handleInlineEdit('jobTitle')}>{resumeData.jobTitle}</h2>
          </header>

          <section className="section">
            <h3><FaUser /> PROFILE</h3>
            <p contentEditable onBlur={handleInlineEdit('profile')}>{resumeData.profile}</p>
          </section>

          <section className="section">
            <h3><FaBriefcase /> WORK EXPERIENCE</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="work-item">
                <h4 contentEditable onBlur={handleInlineEdit('experience', 'company', index)}>{exp.company}</h4>
                <p contentEditable onBlur={handleInlineEdit('experience', 'role', index)}>{exp.role}</p>
                <p contentEditable onBlur={handleInlineEdit('experience', 'years', index)}>{exp.years}</p>
                <ul>
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} contentEditable onBlur={handleInlineEdit('experience', 'details', index, detailIndex)}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="section">
            <h3><FaGraduationCap /> EDUCATION</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 contentEditable onBlur={handleInlineEdit('education', 'degree', index)}>{edu.degree}</h4>
                <p contentEditable onBlur={handleInlineEdit('education', 'school', index)}>{edu.school}</p>
                <p contentEditable onBlur={handleInlineEdit('education', 'years', index)}>{edu.years}</p>
                <p contentEditable onBlur={handleInlineEdit('education', 'gpa', index)}>{edu.gpa}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <button onClick={handleExportPDF} className="btn-export">Export as PDF</button>
    </div>
  );
};

export default Editor;
