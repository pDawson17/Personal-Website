import React, { Component } from "react";
import "./s.css";
class ContainedItem extends Component {
  render() {
    return (
      <div className="ContentBox" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
export default ContainedItem;
