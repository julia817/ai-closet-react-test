import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";

import Menu from "./components/menu";
// Array declaration. I do it here for easier manipulationlet
let menuText = ["Choose for me", "Let me choose", "Store", "Outfits"];
let menuLinks = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];
// App.propTypes = {
//   weather: PropTypes.string,
//   degree: PropTypes.string
// };

class App extends Component {
  state = {
    menuData: [
      { id: 1, data: menuText[0], link: menuLinks[0] },
      { id: 2, data: menuText[1], link: "#" },
      { id: 3, data: menuText[2], link: "#" },
      { id: 4, data: menuText[3], link: "#" }
    ]
  };

  render() {
    //Swipe gesture settings for menu calling the handleMenu function
    const config = {
      onSwipedUp: () => this.handleMenu("up"),
      onSwipedDown: () => this.handleMenu("down"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };

    let weather = this.props.weather;

    return (
      <div className="body">
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              {this.state.menuData.map(menu => (
                <Menu key={menu.id} data={menu.data} link={menu.link} />
              ))}
            </ul>
          </Swipeable>
        </div>
      </div>
    );
  }
  pushShift = (array, x) => {
    array.push(array[x]);
    array.shift(array[x]);
  };

  //takes the array of names and links and shifts everything down
  popUnshift = array => {
    let popItem = array.pop();
    array.unshift(popItem);
  };

  //Handles menu movement by input of either "up" or "down" into (direction)
  handleMenu = direction => {
    let menuArray = menuText.slice();
    let spliceLinks = menuLinks.slice();
    if (direction === "up") {
      this.pushShift(menuArray, 0);
      this.pushShift(spliceLinks, 0);
    }
    if (direction === "down") {
      this.popUnshift(menuArray);
      this.popUnshift(spliceLinks);
    }

    // then updates the state
    menuText = menuArray;
    menuLinks = spliceLinks;
    this.setState({
      menuData: [
        { id: 1, data: menuText[0], link: menuLinks[0] },
        { id: 2, data: menuText[1], link: "#" },
        { id: 3, data: menuText[2], link: "#" },
        { id: 4, data: menuText[3], link: "#" }
      ]
    });
  };
}

App.propTypes = {
  weather: PropTypes.string
  // temperature: PropTypes.String
};

export default App;
