import React, { Component } from "react";

class Item extends Component {
  state = { itemName: this.props.itemName, isDetailed: false };

  render() {
    return (
      <div className="items">
        <a href={this.props.link}>
          <div className="item-wrapper">
            <div
              className={
                this.props.isDetailed === true ? "item-detailed" : "item"
              }
            >
              <div className="img-item">
                <img src={this.props.image} alt={this.props.itemName} />
              </div>
              <div>
                <h3>{this.props.itemName}</h3>
                <h5>{this.props.color}</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Item;
