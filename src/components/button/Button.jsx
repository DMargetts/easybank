import React from "react";
import "./button.css";
const Button = ({ value }) => {
  return (
    <div className="button">
      <button>{value}</button>
    </div>
  );
};

export default Button;
