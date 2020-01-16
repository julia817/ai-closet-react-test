import React, { Component } from "react";
import Header from "./components/Header_back_Logo";
import image from "../../assets/images/Icon.png";
class AiComplete extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header where="Home" link="/" />
        <main>
          <div className="main-img">
            <div className="img-wrapper">
              <h2 className="font-32px">転送完了です。</h2>
              <h2 className="font-32px">今日頑張ってね！</h2>
              <img src={image}></img>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default AiComplete;
