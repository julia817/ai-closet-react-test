import React, { Component } from "react";

class StoreHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <a href={this.props.link}>
            <button className="btn btn-secondary">{this.props.where}</button>
          </a>

          <h1 className="font-60px">{this.props.page}</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default StoreHeader;
