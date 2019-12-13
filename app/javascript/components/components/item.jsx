import React, { Component } from "react";

class Item extends Component {
  state = { itemName: this.props.itemName, isDetailed: false };

  render() {
    return (
      <div className="items">
        <div className="item-wrapper">
          <div
            className={
              this.props.isDetailed === true ? "item-detailed" : "item"
            }
          >
            <div className="img-item">
              <img src={this.props.image} alt="" />
            </div>
            <h3>{this.state.itemName}</h3>
            {this.props.isDetailed === true ? <h5>{this.props.color}</h5> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
