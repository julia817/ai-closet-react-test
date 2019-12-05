import React, { Component } from "react";

class ClothsNavigtation extends Component {
  state = {
    isToggleOn: this.props.isToggleOn,
    value: this.props.value
  };

  menuToggle = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    console.log(this.state.isToggleOn);
  };

  render() {
    return (
      <React.Fragment>
        {/* TODO: replace with buttons */}

        <button
          onClick={this.menuToggle}
          className={this.state.isToggleOn ? "toggleOn" : ""}
        >
          <li href="#">{this.state.value}</li>
        </button>
        <li>|</li>
      </React.Fragment>

      //   <React.Fragment>
      //     {/* TODO: replace with buttons */}

      //     <button onClick={this.menuToggle}>
      //       <li className={this.state.isToggleOn ? "toggleOn" : ""} href="#">
      //         Tops
      //       </li>
      //     </button>

      //     <li>|</li>

      //     <button onClick={this.menuToggle}>
      //       <li className={this.state.isToggleOn ? "toggleOn" : ""} href="#">
      //         Bottoms
      //       </li>
      //     </button>
      //     <li>|</li>

      //     <button onClick={this.menuToggle}>
      //       <li className={this.state.isToggleOn ? "toggleOn" : ""} href="#">
      //         Accesories
      //       </li>
      //     </button>
      //     <li>|</li>

      //     <button onClick={this.menuToggle}>
      //       <li className={this.state.isToggleOn ? "toggleOn" : ""} href="#">
      //         others
      //       </li>
      //     </button>
      //   </React.Fragment>
    );
  }
}

export default ClothsNavigtation;
