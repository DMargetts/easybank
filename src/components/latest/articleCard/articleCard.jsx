import React from "react";
import "./articleCard.css";
const articleCard = ({ image, header, paragraph, author }) => {
  return (
    <div className="articleCard">
      <img src={image} alt="" />
      <label>{author}</label>
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default articleCard;
