import React, { Component } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import ContainedItem from "./Components/ContainedItem";
import me1 from "./Images/me1.jpg";
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
        <div className="spacing" />
        <Container>
          <ContainedItem>
            <img
              src={me1}
              height={400}
              width={600}
              style={{
                borderRadius: 80,
                alignSelf: "center",
                paddingBottom: 20,
                paddingTop: 20
              }}
            />
          </ContainedItem>
          <ContainedItem>
            <p className="Paragraph">
              I am Phil. Sophomore Computer Science major at Santa Clara
              University
            </p>
          </ContainedItem>
        </Container>

        <Container>
          <ContainedItem>
            <p className="Paragraph">Stuff Ive done Santa Clara University</p>
          </ContainedItem>
          <ContainedItem style={{ backgroundColor: "#303638" }}>
            <p className="Paragraph">Projects</p>
          </ContainedItem>
          <ContainedItem style={{ backgroundColor: "#3B4245" }}>
            <p className="Paragraph">My resume</p>
          </ContainedItem>
        </Container>
      </div>
    );
  }
}

export default App;
