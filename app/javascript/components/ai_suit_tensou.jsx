import React, { Component } from "react";
import Header from "./components/Header_back_Logo";
import image from "../../assets/images/tensou.jpg";
class SuitData extends Component {
  state = {};
  render() {
    const timer = setTimeout(function() {
      window.location = "/AiCoordinate-Complete";
    }, 4000);
    return (
      <React.Fragment>
        <Header where="Back" link="/AiCoordinate-finalSelection" />
        <main {...timer}>
          <div className="main-img">
            <div className="img-wrapper">
              <h2 className="font-32px">スーツにデータを転送しています</h2>
              <img src={image}></img>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default SuitData;
