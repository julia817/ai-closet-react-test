import React, { Component } from "react";

class Selection extends Component {
  state = { images: this.props.Images };

  render() {
    console.log(this.props.Gender);
    return (
      <div>
        <div className="items-sml">
          <h2 className="font-34px">
            {this.props.title} {this.props.ID}
          </h2>
          <div className="img-item-sml">
            <a href={this.props.link}>
              <img src={this.props.images}></img>
            </a>
          </div>
          <div className="img-item-sml">
            <a href={this.props.link}>
              <img src={this.props.images2}></img>
            </a>
          </div>
          <div className="img-item-sml">
            <a href={this.props.link}>
              <img src={this.props.images3}></img>
            </a>
          </div>
          <div className="img-item-sml">
            <a href={this.props.link}>
              <img src={this.props.images4}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title} 2</h2>
                <div className="img-item-sml">
                  <a href={this.props.link2}>
                    <img src={this.props.page2[0]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link2}>
                    <img src={this.props.page2[1]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link2}>
                    <img src={this.props.page2[2]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link2}>
                    <img src={this.props.page2[3]}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title} 3</h2>
                <div className="img-item-sml">
                  <a href={this.props.link3}>
                    <img src={this.props.page3[0]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link3}>
                    <img src={this.props.page3[1]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link3}>
                    <img src={this.props.page3[2]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link3}>
                    <img src={this.props.page3[3]}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title} 4</h2>
                <div className="img-item-sml">
                  <a href={this.props.link4}>
                    <img src={this.props.page4[0]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link4}>
                    <img src={this.props.page4[1]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link4}>
                    <img src={this.props.page4[2]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link4}>
                    <img src={this.props.page4[3]}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title} 5</h2>
                <div className="img-item-sml">
                  <a href={this.props.link5}>
                    <img src={this.props.page5[0]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link5}>
                    <img src={this.props.page5[1]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link5}>
                    <img src={this.props.page5[2]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link5}>
                    <img src={this.props.page5[3]}></img>
                  </a>
                </div>
              </div>
            </div>
 */
}
export default Selection;
