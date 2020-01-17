import React, { Component } from "react";
import Head from "./Header_back_Logo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Selection extends Component {
  state = { images: this.props.images };

  render() {
    return (
      <div className="body">
        <Head where="Back" link="AiCoordinate" />
        <main>
          <Carousel showStatus={false}>
            <div>
              <div className="items-sml">
                <h2 className="font-34px">{this.props.title} 1</h2>
                <div className="img-item-sml">
                  <a href={this.props.link1}>
                    <img src={this.props.page1[0]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link1}>
                    <img src={this.props.page1[1]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link1}>
                    <img src={this.props.page1[2]}></img>
                  </a>
                </div>
                <div className="img-item-sml">
                  <a href={this.props.link1}>
                    <img src={this.props.page1[3]}></img>
                  </a>
                </div>
              </div>
            </div>
            <div>
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
            <div>
              <img className="none" src="assets/6.jpeg" />
              <p className="none">Legend 6</p>
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
