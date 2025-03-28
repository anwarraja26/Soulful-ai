import React, { useState } from "react";
import "../styles/Template.css";
import profilePic from "../assets/landing-page-images/robot.jpg"; 

const Template1 = () => {
  const [profile, setProfile] = useState({
    name: "RICHARD SANCHEZ",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@realityresite.com",
      address: "123 Anywhere St, Any City",
      website: "www.realityresite.com"
    },
    skills: ["Project Management", "Public Relations", "Teamwork", "Time Management", "Leadership"],
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
          "Collaborate with teams and monitor market trends.",
          "Optimize campaign performance with data insights."
        ]
      },
      {
        company: "Fauget Studio",
        role: "Marketing Manager & Specialist",
        period: "2025 - 2029",
        details: [
          "Managed marketing budgets effectively.",
          "Analyzed customer needs and optimized campaigns.",
          "Increased brand awareness by 30%."
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
        index === field ? (typeof value === "string" ? value : String(value)) : item
      );
      setProfile({ ...profile, [section]: updatedSection });
    } else if (typeof profile[section] === "object") {
      setProfile({
        ...profile,
        [section]: { ...profile[section], [field]: typeof value === "string" ? value : String(value) }
      });
    } else {
      setProfile({ ...profile, [section]: typeof value === "string" ? value : String(value) });
    }
  };

  return (
    <div className="template-container">
      <div className="sidebar">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        
        <div className="sidebar-section">
          <h3>CONTACT</h3>
          {Object.entries(profile.contact).map(([key, value], index) => (
            <p
              key={index}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleChange("contact", key, e.target.innerText)}
            >
              {value}
            </p>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>SKILLS</h3>
          {profile.skills.map((skill, index) => (
            <p
              key={index}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleChange("skills", index, e.target.innerText)}
            >
              {typeof skill === "string" ? skill : JSON.stringify(skill)}
            </p>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>LANGUAGES</h3>
          {profile.languages.map((lang, index) => (
            <p
              key={index}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleChange("languages", index, e.target.innerText)}
            >
              {typeof lang === "string" ? lang : JSON.stringify(lang)}
            </p>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>REFERENCE</h3>
          {Object.entries(profile.reference).map(([key, value], index) => (
            <p
              key={index}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleChange("reference", key, e.target.innerText)}
            >
              {value}
            </p>
          ))}
        </div>
      </div>

      <div className="content">
        <h1
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => handleChange("name", "name", e.target.innerText)}
        >
          {profile.name}
        </h1>

        <h2
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => handleChange("title", "title", e.target.innerText)}
        >
          {profile.title}
        </h2>

        <div className="section">
          <h3>WORK EXPERIENCE</h3>
          {profile.experience.map((exp, index) => (
            <div key={index} className="experience">
              <h4
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={(e) => handleChange("experience", index, { company: e.target.innerText })}
              >
                {exp.company}
              </h4>

              <p
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={(e) => handleChange("experience", index, { role: e.target.innerText })}
              >
                {exp.role}
              </p>

              <p
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={(e) => handleChange("experience", index, { period: e.target.innerText })}
              >
                {exp.period}
              </p>

              <ul>
                {exp.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    contentEditable
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      const newDetails = [...exp.details];
                      newDetails[detailIndex] = e.target.innerText;
                      handleChange("experience", index, { details: newDetails });
                    }}
                  >
                    {typeof detail === "string" ? detail : JSON.stringify(detail)}
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
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p>{edu.period}</p>
              <p>{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template1;
