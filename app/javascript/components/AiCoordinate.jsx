import React, { Component } from "react";

class AiCoordinate extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <header>
          <a href="/">
            <button className="btn btn-secondary">Back</button>
          </a>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <main>
          <div className="items">
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Casual</h3>
              </div>
            </div>
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Business Casual</h3>
              </div>
            </div>
            <div className="item-wrapper">
              <div className="item">
                <div className="img-item">
                  <img src="#" alt="" />
                </div>
                <h3>Formal</h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AiCoordinate;
