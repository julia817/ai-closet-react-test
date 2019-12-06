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
          {this.state.item.map(item => (
            <Item key={item.id} itemName={item.itemName} />
          ))}
        </main>
      </div>
      /* <main>
          <div className="items">
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Casual</h3>
              </div>
            </div>
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Business Casual</h3>
              </div>
            </div>
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Formal</h3>
              </div>
            </div>
          </div>
        </main>
      </div> */
    );
  }
}

export default AiCoordinate;
