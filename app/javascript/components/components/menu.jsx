import React, { Component } from "react";
let cssClass = ["top-bottom", "two-top", "three-2", "four-3"];

class Menu extends Component {
  state = { animate: this.props.animate };

  render() {
    return (
      <li>
        <a href={this.props.link} className="menu-transition">
          {this.props.data}
        </a>
      </li>
    );
  }
}

export default Menu;
