import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // Render Html
  return (
    <div className="footer-container">
      <div className="footer">
        <p className="footer-text">Nowhere Health</p>
        <p className="footer-subtext">Copyright © 2021 Nowhere Health</p>
      </div>
    </div>
  );
};

export default Footer;
