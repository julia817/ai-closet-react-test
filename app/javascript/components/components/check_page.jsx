import React, { Component } from "react";

class AiCheckPage extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="checkBorder">
          <h2 className="font-30px">{this.props.checkTitle}</h2>
          <form id="border-change">
            <span>
              <input type="checkbox" name="rent" id="rent" />
              レンタルやストアのアイテムを含む
            </span>
            <span>
              <input type="checkbox" name="closet" id="closet" />
              クロセットのみ
            </span>
          </form>
          <a href={this.props.link}>
            <button className="btn btn-primary">{this.props.where}</button>
          </a>
        </div>
      </main>
    );
  }
}

export default AiCheckPage;
