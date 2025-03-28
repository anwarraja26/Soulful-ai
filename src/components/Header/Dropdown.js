import React from "react";
import "../../styles/Header.css";
const Dropdown = ({ items, onItemClick }) => {
  return (
    <div className="dropdown">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="dropdown-item" 
          onClick={onItemClick}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;