import React, { useState } from "react";
import "../styles/TemplateEditor.css"; // Add the matching styles
import profilePic from "../assets/landing-page-images/robot.jpg"; // Replace with your image path

const TemplateEditor = () => {
  const [profile, setProfile] = useState({
    name: "RICHARD SANCHEZ",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@realityresite.com",
      address: "123 Anywhere St, Any City",
      website: "www.realityresite.com"
    },
    skills: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Digital Marketing"
    ],
    languages: ["English (Fluent)", "French (Intermediate)", "Spanish (Basic)"],
    reference: {
      name: "Estelle Darcy",
      title: "Wanderlace Inc. / CTO",
      phone: "+123-456-7890",
      email: "hello@realityresite.com"
    },
    experience: [
      {
        company: "Borcetile Studio",
        role: "Marketing Manager & Specialist",
        period: "2020 - PRESENT",
        details: [
          "Develop and execute comprehensive marketing strategies.",
          "Collaborate with cross-functional teams.",
          "Monitor trends and implement marketing plans."
        ]
      },
      {
        company: "Fauget Studio",
        role: "Marketing Manager & Specialist",
        period: "2025 - 2029",
        details: [
          "Manage marketing budget and campaigns.",
          "Conduct customer needs analysis.",
          "Monitor brand performance."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Business Management",
        institution: "Tranquil University",
        period: "2020 - 2023",
        gpa: "GPA: 3.8 / 4.0"
      }
    ]
  });

  const handleChange = (section, field, value) => {
    if (Array.isArray(profile[section])) {
      const updatedSection = profile[section].map((item, index) =>
        index === field ? { ...item, ...value } : item
      );
      setProfile({ ...profile, [section]: updatedSection });
    } else {
      setProfile({ ...profile, [section]: { ...profile[section], [field]: value } });
    }
  };

  return (
    <div className="template-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="sidebar-section">
          <h3>CONTACT</h3>
          <p contentEditable onBlur={(e) => handleChange("contact", "phone", e.target.innerText)}>
            {profile.contact.phone}
          </p>
          <p contentEditable onBlur={(e) => handleChange("contact", "email", e.target.innerText)}>
            {profile.contact.email}
          </p>
          <p contentEditable onBlur={(e) => handleChange("contact", "address", e.target.innerText)}>
            {profile.contact.address}
          </p>
          <p contentEditable onBlur={(e) => handleChange("contact", "website", e.target.innerText)}>
            {profile.contact.website}
          </p>
        </div>

        <div className="sidebar-section">
          <h3>SKILLS</h3>
          {profile.skills.map((skill, index) => (
            <p key={index} contentEditable onBlur={(e) => handleChange("skills", index, e.target.innerText)}>
              {skill}
            </p>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>LANGUAGES</h3>
          {profile.languages.map((lang, index) => (
            <p key={index} contentEditable onBlur={(e) => handleChange("languages", index, e.target.innerText)}>
              {lang}
            </p>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>REFERENCE</h3>
          <p contentEditable onBlur={(e) => handleChange("reference", "name", e.target.innerText)}>
            {profile.reference.name}
          </p>
          <p contentEditable onBlur={(e) => handleChange("reference", "title", e.target.innerText)}>
            {profile.reference.title}
          </p>
          <p contentEditable onBlur={(e) => handleChange("reference", "phone", e.target.innerText)}>
            {profile.reference.phone}
          </p>
          <p contentEditable onBlur={(e) => handleChange("reference", "email", e.target.innerText)}>
            {profile.reference.email}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 contentEditable onBlur={(e) => handleChange("name", "name", e.target.innerText)}>
          {profile.name}
        </h1>
        <h2 contentEditable onBlur={(e) => handleChange("title", "title", e.target.innerText)}>
          {profile.title}
        </h2>

        <div className="section">
          <h3>WORK EXPERIENCE</h3>
          {profile.experience.map((exp, index) => (
            <div key={index} className="experience">
              <h4 contentEditable onBlur={(e) => handleChange("experience", index, { company: e.target.innerText })}>
                {exp.company}
              </h4>
              <p contentEditable onBlur={(e) => handleChange("experience", index, { role: e.target.innerText })}>
                {exp.role}
              </p>
              <p contentEditable onBlur={(e) => handleChange("experience", index, { period: e.target.innerText })}>
                {exp.period}
              </p>
              <ul>
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex} contentEditable onBlur={(e) => {
                    const newDetails = [...exp.details];
                    newDetails[detailIndex] = e.target.innerText;
                    handleChange("experience", index, { details: newDetails });
                  }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section">
          <h3>EDUCATION</h3>
          {profile.education.map((edu, index) => (
            <div key={index}>
              <h4 contentEditable onBlur={(e) => handleChange("education", index, { degree: e.target.innerText })}>
                {edu.degree}
              </h4>
              <p contentEditable onBlur={(e) => handleChange("education", index, { institution: e.target.innerText })}>
                {edu.institution}
              </p>
              <p contentEditable onBlur={(e) => handleChange("education", index, { period: e.target.innerText })}>
                {edu.period}
              </p>
              <p>{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
