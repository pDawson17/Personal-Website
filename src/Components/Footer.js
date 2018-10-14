import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./s.css";
const Footer = ({ label, onClick }) => {
  return (
    <div className="Footer" onClick={onClick}>
      <a href="https://www.linkedin.com/in/philip-dawson17/">
        <FaLinkedin size={80} color={"#0077b5"} />
      </a>
      <a href="https://github.com/pDawson17">
        <FaGithub size={80} color={"black"} />
      </a>
      <a href="https://www.instagram.com/phil__dawson/">
        <FaInstagram size={80} color={"#cd486b"} />
      </a>
      <p className="FooterText">{label}</p>
    </div>
  );
};

export default Footer;
