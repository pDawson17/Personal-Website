import React from "react";
import backImage from "./headerbg.jpg";
import Component from "react-background-video-player";
import BackgroundVid from "../Images/BackgroundVid.mp4";
import Bubbles from "../Images/bubbles.mp4";
import "./s.css";
const Header = ({ title, slogan }) => {
  return (
    <div className="Header" style={styles.headerStyle}>
      <Component src={BackgroundVid} autoPlay={true} containerHeight={500} />
      <nav
        style={{
          position: "absolute",
          left: 30,
          bottom: 30,
          display: "flex",
          alignItems: "center"
        }}
      >
        <p className="HeaderText">{title}</p>
        <p className="Slogan">{slogan}</p>
      </nav>
    </div>
  );
};
//blue "#80B2BE"
const styles = {
  headerStyle: {
    backgroundColor: "#262a2c",
    height: 800
    //  backgroundImage: `url(${backImage})`,
    //justifyContent: "center"
  }
};
//
// <video className="imageBackground" loop autoPlay>
//   <source src={BackgroundVid} type="video/mp4" />
// </video>
export default Header;
