import React, { Component } from "react";
import LogoBackHead from "./components/Header_back_Logo";
import Item from "./components/item-borderless";
import PropTypes from "prop-types";
//
class AiSelectedItems extends Component {
  state = {
    comment: "今日のコーディネート",
    isDetailed: true
  };
  render() {
    console.log(this.props.Data);
    let propData = this.props.Data[1];
    let Images = this.props.Images;

    let Data = [
      {
        id: 1,
        itemGenre: "Top",
        itemName: propData.type1,
        color: propData.color1,
        image: Images[4]
      },
      {
        id: 2,
        itemGenre: "Bottom",
        itemName: propData.type2,
        color: propData.color2,
        image: Images[5]
      },
      {
        id: 3,
        itemGenre: "Outer",
        itemName: propData.type3,
        color: propData.color3,
        image: Images[6]
      },
      {
        id: 4,
        itemGenre: "Shoes",
        itemName: propData.type4,
        color: propData.color4,
        image: Images[7]
      }
    ];
    return (
      <React.Fragment>
        <LogoBackHead where="Back" link="/AiCoordinate-Casual" />

        <main>
          <h2 className="font-36px">{this.state.comment}</h2>
          <div className="items-div-borderless">
            {Data.map(item => (
              <Item
                itemGenre={item.itemGenre}
                key={item.id}
                itemName={item.itemName}
                image={item.image}
                color={item.color}
                isDetailed={this.state.isDetailed}
              />
            ))}
          </div>

          <a href="/AiCoordinate-SuitTensou" className="confirmation-button">
            <button className="btn-primary">確定</button>
          </a>
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
