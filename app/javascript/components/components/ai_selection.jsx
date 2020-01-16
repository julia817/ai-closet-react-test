import React, { Component } from "react";
import Head from "./Header_back_Logo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Selection extends Component {
  state = {};

  render() {
    return (
      <div className="body">
        <Head where="Back" link="AiCoordinate" />
        <main>
          <Carousel showStatus={false}>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title1}</h2>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.itemOne}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.itemTwo}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.itemThree}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.itemFour}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title2}</h2>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.item5}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.item6}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.item7}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link}>
                    <img src={this.props.item8}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img src={this.props.itemThree} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </main>
      </div>
    );
  }
}

{
  /* <div className="items-sml">
  <h2 className="font-34px">{this.props.title}</h2>
  <div className="img-item-sml">
    <a href={this.props.link}>
      <img src={this.props.itemOne}></img>
    </a>
  </div>
  <div className="img-item-sml">
    <a href={this.props.link}>
      <img src={this.props.itemTwo}></img>
    </a>
  </div>
  <div className="img-item-sml">
    <a href={this.props.link}>
      <img src={this.props.itemThree}></img>
    </a>
  </div>
  <div className="img-item-sml">
    <a href={this.props.link}>
      <img src={this.props.itemFour}></img>
    </a>
  </div>
</div>; */
}

export default Selection;
