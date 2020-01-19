import React, { Component } from "react";
import LogoBackHead from "./components/Header_back_Logo";
import Item from "./components/item-borderless";
import Top from "../../assets/images/coordinates/f_casual/4/3.png";
import Bottom from "../../assets/images/coordinates/f_casual/4/2.png";
import PropTypes from "prop-types";
//
class AiSelectedItems extends Component {
  state = {
    comment: "今日のコーディネート",
    isDetailed: true
  };
  render() {
    let propData = this.props.Data[this.props.Query];
    let Images = this.props.Images[this.props.Query];
    console.log(this.props.Data[this.props.Query].type2);
    let Data = [
      {
        id: 1,
        itemGenre: "Top",
        itemName: propData.type1,
        color: propData.color1,
        image: Images[0]
      },
      {
        id: 2,
        itemGenre: propData.type2 === "" ? "" : "Bottoms",
        itemName: propData.type2,
        color: propData.color2,
        image: propData.type2 === "" ? "" : Images[1]
      },
      {
        id: 3,
        itemGenre: "Outer",
        itemName: propData.type3,
        color: propData.color3,
        image: propData.type2 === "" ? Images[1] : Images[2]
      },
      {
        id: 4,
        itemGenre: "Shoes",
        itemName: propData.type4,
        color: propData.color4,
        image: propData.type2 === "" ? Images[2] : Images[3]
      }
    ];

    function startVideo() {
      navigator.getUserMedia(
        { video: {} },
        stream => (video.srcObject = stream),
        err => console.error(err)
      );
    }

    let Gender = this.props.Gender;
    let style =
      this.props.Type === "c"
        ? "Casual-"
        : this.props.Type === "bc"
        ? "BusinessCasual-"
        : this.props.Type === "fo"
        ? "Formal"
        : "";
    console.log(style);
    return (
      <React.Fragment>
        <LogoBackHead
          where="Back"
          link={"/AiCoordinate-" + style + "" + Gender + ""}
        />

        <main>
          <h2 className="font-36px">{this.state.comment}</h2>
          <div
            className="items-div-borderless"
            className={
              Data[1].itemGenre === ""
                ? "items-div-borderless remove-Item"
                : "items-div-borderless"
            }
          >
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

        {/* <div className="kagami-tensou">
          <img id="top" className="top " src={Top} alt="" />
          <img id="bottom" className="bottom " src={Bottom} alt="" />
          <video
            {...startVideo()}
            id="video"
            width="1920"
            height="1080"
            autoPlay
            muted
          ></video>
        </div> */}
      </React.Fragment>
    );
  }
}
App.propTypes = {
  clothes: PropTypes.Array,
  image: PropTypes.Array
};

export default AiSelectedItems;
