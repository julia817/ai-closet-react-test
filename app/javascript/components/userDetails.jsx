import React, { Component } from "react";
class User_Details extends Component {
  state = {
    name: "ダリエン"
  };
  render() {
    return (
      <React.Fragment>
        <main className="login-data">
          <h1>こんにちは{this.props.name}</h1>
          <h2>かがみの前に立ってください。あなたのサイズを図ります。</h2>
          <div className="progress-bar"></div>

          <h2>また私サイズ間違えったらここで直してね</h2>
          <form action="">
            <span>
              <h3 className="bold">トップス</h3>
              <input type="text" name="top" id="" placeholder="選択" />
            </span>
            <span>
              <h3 className="bold">パンツ</h3>
              <input type="text" placeholder="選択" />
            </span>
            <span>
              <h3 className="bold">靴サイズ</h3>
              <input type="text" placeholder="選択" />
            </span>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default User_Details;
