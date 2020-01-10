import React, { Component } from "react";
import Head from "./Header_back_Logo";

class Selection extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <Head where="Back" link="AiCoordinate" />
        <main>
          <div className="items-large">
            <h2 className="font-34px">{this.props.title}</h2>
            <div className="img-item-large">
              <a href={this.props.link}>
                <img src={this.props.clotheItem}></img>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Selection;
