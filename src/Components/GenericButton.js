import React from "react";
import backImage from "./headerbg.jpg";
import "./s.css";
const GenericButton = ({ label, onClick }) => {
  return (
    <div className="GenericButton" onClick={onClick}>
      <p>{label}</p>
    </div>
  );
};

export default GenericButton;
