import React from "react";
import "./card.css";
const card = ({ icon, header, paragraph }) => {
  return (
    <div className="card">
      <img src={icon} alt="" />
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default card;
