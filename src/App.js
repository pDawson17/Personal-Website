import React, { Component } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import ContainedItem from "./Components/ContainedItem";
import GenericButton from "./Components/GenericButton";
import DropDownContainer from "./Components/DropDownContainer";
import { FaCode } from "react-icons/fa";
import { Transition } from "react-transition-group";
import Footer from "./Components/Footer";
import me1 from "./Images/me1.jpg";
import zion from "./Images/zion.JPG";
import soccer from "./Images/soccer.jpg";
import modes from "./Images/modes.png";
import guitarTab from "./Images/guitarTab.png";
import budgeting from "./Images/budgeting.png";
import checklist from "./Images/checklist.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header title={"Phil Dawson"} slogan={"Just me, Phil"} />
        <div style={{ height: 40 }} />
        <Container>
          <ContainedItem style={{ backgroundColor: "white" }}>
            <img src={me1} height={400} width={600} style={imageStyle} />
          </ContainedItem>
          <ContainedItem style={{ backgroundColor: "white" }}>
            <p className="TitleText">About me</p>
          </ContainedItem>
        </Container>
        <div style={{ height: 40 }} />
        <Container>
          <ContainedItem>
            <p className="Paragraph">
              Sophomore Computer Science major at Santa Clara University.
            </p>
            <p className="Paragraph">
              {" "}
              I am an aspiring software engineer with a passion for technology
              and a love of learning.
            </p>
            <p className="Paragraph">
              In my free time, I play and watch Soccer. I am currently a
              guitarist in SCU jazz combo. I love getting out in nature.
            </p>
          </ContainedItem>
          <ContainedItem>
            <img src={zion} height={400} width={600} style={imageStyle} />
          </ContainedItem>
        </Container>
        <div style={{ height: 120, alignItems: "center", marginBottom: 30 }}>
          <p className="TitleText">Full Stack Mobile Development</p>
        </div>
        <Container>
          <ContainedItem>
            <p className="Paragraph">BudgetingApp</p>
            <img src={budgeting} height={600} width={340} style={imageStyle} />
            <a href="https://github.com/pDawson17/BudgetingApp">
              <FaCode size={60} color={"white"} style={{ paddingBottom: 30 }} />
            </a>
          </ContainedItem>
          <ContainedItem>
            <p className="Paragraph">Jazz Helper</p>
            <img src={modes} height={600} width={340} style={imageStyle} />
            <a href="https://github.com/pDawson17/JazzHelper">
              <FaCode size={60} color={"white"} style={{ paddingBottom: 30 }} />
            </a>
          </ContainedItem>
          <ContainedItem>
            <p className="Paragraph">Checklist</p>
            <img src={checklist} height={600} width={340} style={imageStyle} />
            <a href="https://github.com/pDawson17/Checklist">
              <FaCode size={60} color={"white"} style={{ paddingBottom: 30 }} />
            </a>
          </ContainedItem>
        </Container>
        <div style={{ height: 120, alignItems: "center" }}>
          <p className="TitleText">Skills and Coursework</p>
        </div>
        <Container>
          <ContainedItem>
            <p className="Paragraph">
              ReactJS <br />
              React Native <br />
              C++ <br />
              Python <br />
              Javascript <br />
            </p>
          </ContainedItem>
          <ContainedItem>
            <p className="Paragraph">
              Object Oriented Programming <br />
              Data Structures <br />
              Discrete Math <br />
              Logic Design <br />
            </p>
          </ContainedItem>
        </Container>
        <Footer
          label={"Lets stay in touch!"}
          bottomLabel={"Feel free to contact me at pDawson@scu.edu"}
        />
      </div>
    );
  }
}
const buttonStyle = {
  width: 100,
  height: 40,
  marginBottom: 20,
  backgroundColor: "#ffd27f",
  alignSelf: "center",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center"
};
const imageStyle = {
  alignSelf: "center",
  paddingBottom: 20,
  paddingTop: 20
};
export default App;
