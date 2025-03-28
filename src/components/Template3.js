import React, { useState } from "react";
import "../styles/Templates.css";

const Template3 = () => {
  const [name, setName] = useState("Alice Smith");
  const [title, setTitle] = useState("Product Manager");
  const [skills, setSkills] = useState(["Leadership", "Agile", "Team Collaboration"]);

  return (
    <div className="resume-template template-3">
      <header>
        <h1 contentEditable={true} onBlur={(e) => setName(e.target.innerText)}>
          {name}
        </h1>
        <p contentEditable={true} onBlur={(e) => setTitle(e.target.innerText)}>
          {title}
        </p>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} contentEditable={true}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template3;
