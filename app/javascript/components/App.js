import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";

import Menu from "./components/menu";

// this is the state object array: its declared here as it needs to be manipulated to add the movement of the
let menuState = [
  { id: 1, data: "Choose for me", link: "/AiCoordinate" },
  { id: 2, data: "Let me choose", link: "/LetMeChoose" },
  { id: 3, data: "Store", link: "/Store" },
  { id: 4, data: "Outfits", link: "/Outfits" }
];

class App extends Component {
  state = {
    menuData: menuState,
    animate: false
  };

  render() {
    //Swipe gesture settings for menu calling the handleMenu function
    const config = {
      onSwipedUp: () => this.handleMenu("up"),
      onSwipedDown: () => this.handleMenu("down"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };
    let propClothes = this.props.clothes;
    console.log(propClothes);
    let weather = this.props.weather;

    return (
      // <Meta />
      <div className="body">
        <header>
          <a href="">
            <button className="btn btn-secondary">HOME</button>
          </a>
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
    let menuArray = this.state.menuData.slice();
    direction === "up"
      ? this.pushShift(menuArray, 0)
      : direction === "down"
      ? this.popUnshift(menuArray)
      : null;

    menuState = menuArray;

    this.setState({
      menuData: menuState
    });
  };
}

App.propTypes = {
  clothes: PropTypes.array
  // temperature: PropTypes.String
};

export default App;
