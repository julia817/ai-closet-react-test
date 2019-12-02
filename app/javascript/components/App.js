import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types"

let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];

class App extends Component {
  state = {
    menuArray: arr,
    menuLinks: links
  };

  render() {
    let links = this.state.menuLinks;
    let names = this.state.menuArray;

    //Swipe gesture settings for menu
    const config = {
      onSwipedUp: () => this.handleMenuUp(),
      onSwipedDown: () => this.handleMenuDown(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };

    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div>
          今の天気：{this.props.weather}
          今の気温：{this.props.degree}℃
        </div>
        <div id="main">
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              <li>
                <Link to={links[0]}>{names[0]}</Link>
              </li>
              <li>
                <Link to="">{names[1]}</Link>
              </li>
              <li>
                <Link to="">{names[2]}</Link>
              </li>
              <li>
                <Link to="">{names[3]}</Link>
              </li>
            </ul>
          </Swipeable>
        </div>
      </React.Fragment>
    );
  }

  //manipulates array of links and Names to move menu up
  pushShift = (array, x) => {
    array.push(array[x]);
    array.shift(array[x]);
  };

  //takes the array of names and links and shifts everything down
  popUnshift = array => {
    let popItem = array.pop();
    array.unshift(popItem);
  };

  handleMenuUp = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.pushShift(menuArray, 0);
    this.pushShift(spliceLinks, 0);
    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr, menuLinks: links });
  };

  handleMenuDown = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.popUnshift(menuArray);
    this.popUnshift(spliceLinks);

    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr, menuLinks: links });
  };
}

App.propTypes = {
  weather: PropTypes.string,
  degree: PropTypes.string
};


export default App;
