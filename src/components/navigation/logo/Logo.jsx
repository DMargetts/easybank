import React from "react";
import EasyBankLogo from "../../../images/logo.svg";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src={EasyBankLogo} alt="Easybank Logo" />
    </div>
  );
};

export default Logo;
