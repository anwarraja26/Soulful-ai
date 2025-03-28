import React, { useState } from "react";
import "../styles/Editor.css";

const ResumeSection = ({ section }) => {
  const [content, setContent] = useState(section.content);

  const handleChange = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <div className="resume-section" contentEditable={true} onBlur={handleChange}>
      <h2>{section.title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ResumeSection;
