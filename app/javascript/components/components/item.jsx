import React, { Component } from "react";

class Item extends Component {
  state = { itemName: this.props.itemName };
  render() {
    return (
      <div className="items">
        <div className="item-wrapper">
          <div className="item">
            <div className="img-item">
              <img src="#" alt="" />
            </div>
            <h3>{this.state.itemName}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
