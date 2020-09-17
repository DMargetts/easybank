import React from "react";
import Logo from "./logo/Logo";
import Button from "../button/Button";

import "./navigation.css";
const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <Button value="Request Invite" />
    </nav>
  );
};

export default Navigation;
