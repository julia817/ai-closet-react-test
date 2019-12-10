import React, { Component } from "react";

class Menu extends Component {
  state = { animate: this.props.animate };

  render() {
    return (
      <li>
        <a
          href={this.props.link}
          className={this.props.animate ? "menu-transition" : ""}
        >
          {this.props.data}
        </a>
      </li>
    );
  }
}

export default Menu;
