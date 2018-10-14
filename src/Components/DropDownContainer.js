import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./s.css";

//TODO add transitions to make this useable
class DropDownContainer extends Component {
  showContent() {
    if (this.props.selected) {
      return <div className="DropDownContainer">{this.props.children}</div>;
    }
  }
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        transitionAppear={true}
      >
        {this.showContent()}
      </CSSTransitionGroup>
    );
  }
}

export default DropDownContainer;
