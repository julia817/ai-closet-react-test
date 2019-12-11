import React, { Component } from "react";
import { Link } from "react-router-dom";

import ClothsNavigtation from "./components/LMCMenu";

class LetMeChoose extends Component {
  state = {
    toggles: [
      { id: 1, isToggleOn: false, value: "Tops" },
      { id: 3, isToggleOn: false, value: "Bottoms" },
      { id: 5, isToggleOn: false, value: "Accesories" },
      { id: 7, isToggleOn: false, value: "Others" }
    ]
  };

  render() {
    return (
      <div className="body">
        <nav className="top-nav">
          <ul>
            {this.state.toggles.map(toggles => (
              <ClothsNavigtation key={toggles.id} value={toggles.value} />
            ))}
          </ul>
        </nav>
        <div className="display-settings">
          <span className="list"></span>
          <span>|</span>
          <span className="full"></span>
          <span>|</span>
          <span className="tiles"></span>
        </div>
        <main>
          <h1>Current Selected Items</h1>
          <div className="items">
            <p>No items selected</p>
          </div>
        </main>
        <nav className="bottom-nav">
          <a href="/" className="btn-back">
            Back
          </a>
        </nav>
      </div>
    );
  }
}

export default LetMeChoose;
