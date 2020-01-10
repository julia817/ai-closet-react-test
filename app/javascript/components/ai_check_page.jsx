import React, { Component } from "react";
import Header from "./components/Header_back_Logo";
import Check from "./components/check_page";
class RentOrBuy extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <Header where="Back" link="../" />
        <Check
          checkTitle="レンタルにしますか？ またはクロセットから選択しますか？"
          where="次へ"
          link="/AiCoordinate-finalSelection"
        />
      </div>
    );
  }
}

export default RentOrBuy;
