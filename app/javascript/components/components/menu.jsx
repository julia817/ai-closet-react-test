import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <li>
        <a href={this.props.link}>{this.props.data}</a>
      </li>
    );
  }
}

export default Menu;
