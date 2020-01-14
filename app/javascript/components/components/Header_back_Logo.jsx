import React, { Component } from "react";

class LogoBackHead extends Component {
  state = {
    header: { where: this.props.header, link: this.props.header }
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <a href={this.props.link}>
            <button className="btn btn-secondary">{this.props.where}</button>
          </a>

          <h1 className="logo-main">ai closet</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default LogoBackHead;

/* <a href={this.state.header.link}>
            <button className="btn btn-secondary">
              {this.state.header.where}
            </button>
          </a> */
