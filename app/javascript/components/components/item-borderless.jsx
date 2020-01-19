import React, { Component } from "react";

class Item extends Component {
  state = { itemName: this.props.itemName, isDetailed: false };

  render() {
    return (
      <div className="items-borderless">
        <div className="item-wrapper-borderless">
          <div
            className={
              this.props.isDetailed === true ? "item-detailed" : "item"
            }
          >
            <div className="piece">
              <h2 className="font-28px">{this.props.itemGenre}</h2>
            </div>
            <div className="img-item">
              <img src={this.props.image} alt={this.props.itemName} />
            </div>
            <div className="details">
              <h3>{this.props.itemName}</h3>
              <h5>{this.props.color}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
