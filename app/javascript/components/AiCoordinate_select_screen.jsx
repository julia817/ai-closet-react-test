import React, { Component } from "react";
import LogoBackHead from "./components/Header_back_Logo";
import Item from "./components/item";
import PropTypes from "prop-types";

class AiSelectedItems extends Component {
  state = {
    comment: "今日のコーディネート",
    isDetailed: true,
    item: [
      {
        id: 1,
        itemName: this.props.clothes[0].type,
        color: this.props.clothes[0].color,
        image: this.props.image[0]
      },
      {
        id: 2,
        itemName: this.props.clothes[1].type,
        color: this.props.clothes[1].color,
        image: this.props.image[1]
      },
      {
        id: 3,
        iitemName: this.props.clothes[2].type,
        color: this.props.clothes[2].color,
        image: this.props.image[2]
      },
      {
        id: 4,
        itemName: "Test",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 5,
        itemName: "aaa",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 6,
        itemName: "HogeHoge",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      }
    ]
  };
  render() {
    const propClothe = this.props.clothes;
    console.log(this.props.clothes);
    console.log(this.props.image);

    return (
      <React.Fragment>
        <LogoBackHead where="Refresh" link="/AiCoordinate-finalSelection" />

        <main>
          <h2 className="font-32px">{this.state.comment}</h2>
          <div className="items-div">
            {this.state.item.map(item => (
              <Item
                key={item.id}
                itemName={item.itemName}
                image={item.image}
                color={item.color}
                isDetailed={this.state.isDetailed}
              />
            ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  clothes: PropTypes.Array,
  image: PropTypes.Array
};

export default AiSelectedItems;
