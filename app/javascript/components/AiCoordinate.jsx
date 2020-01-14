import React, { Component } from "react";
import Item from "./components/item";

class AiCoordinate extends Component {
  state = {
    item: [
      { id: 1, itemName: "Casual", image: "#" },
      { id: 2, itemName: "Business Casual", image: "#" },
      { id: 3, itemName: "Formal", image: "#" }
    ]
  };
  render() {
    return (
      <div className="body">
        <header>
          <a href="/">
            <button className="btn btn-secondary">Back</button>
          </a>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <main>
          <div className="items-div">
            {this.state.item.map(item => (
              <Item key={item.id} itemName={item.itemName} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default AiCoordinate;
