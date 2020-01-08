import React, { Component } from "react";

class ClothsNavigtation extends Component {
  state = {
    isToggleOn: this.props.isToggleOn
  };
  menuToggle = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    console.log(this.state.isToggleOn);
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.menuToggle}
          className={this.state.isToggleOn ? "toggleOn" : ""}
        >
          <li href="#">{this.props.value}</li>
        </button>
        <li>|</li>
      </React.Fragment>
    );
  }
}

export default ClothsNavigtation;
