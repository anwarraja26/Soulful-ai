import React, { useState } from "react";
import "../styles/Templates.css";

const Template1 = () => {
  const [name, setName] = useState("John Doe");
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [contact, setContact] = useState({
    phone: "+1 234 567 890",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville, USA"
  });

  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [experience, setExperience] = useState([
    { company: "Company A", role: "Frontend Developer", year: "2020-2023" },
    { company: "Company B", role: "Backend Developer", year: "2018-2020" }
  ]);

  return (
    <div className="resume-template">
      <header className="header">
        <h1 
          contentEditable={true} 
          suppressContentEditableWarning={true} 
          onBlur={(e) => setName(e.target.innerText)}
        >
          {name}
        </h1>
        <h2 
          contentEditable={true} 
          suppressContentEditableWarning={true}
          onBlur={(e) => setJobTitle(e.target.innerText)}
        >
          {jobTitle}
        </h2>
      </header>

      <div className="contact">
        <p contentEditable={true} onBlur={(e) => setContact({ ...contact, phone: e.target.innerText })}>
          📞 {contact.phone}
        </p>
        <p contentEditable={true} onBlur={(e) => setContact({ ...contact, email: e.target.innerText })}>
          📧 {contact.email}
        </p>
        <p contentEditable={true} onBlur={(e) => setContact({ ...contact, address: e.target.innerText })}>
          📍 {contact.address}
        </p>
      </div>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} contentEditable={true} suppressContentEditableWarning={true}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4 contentEditable={true} suppressContentEditableWarning={true}>
              {exp.company}
            </h4>
            <p contentEditable={true} suppressContentEditableWarning={true}>
              {exp.role} | {exp.year}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Template1;
