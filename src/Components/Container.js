import React, { Component } from "react";
import "./s.css";
class Container extends Component {
  render() {
    return <div className="Container">{this.props.children}</div>;
  }
}

export default Container;
