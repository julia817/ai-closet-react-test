import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";

import Menu from "./components/menu";

let menuClasses = [".men-tran-0", ".men-tran-1", ".men-tran-2", ".men-tran-3"];
// this is the state object array: its declared here as it needs to be manipulated to add the movement of the
let menuState = [
  {
    id: 1,
    data: "Choose for me",
    link: "/AiCoordinate",
    class: menuClasses[1]
  },
  { id: 2, data: "Let me choose", link: "/LetMeChoose", class: menuClasses[2] },
  { id: 3, data: "Store", link: "/Store", class: menuClasses[3] },
  { id: 4, data: "Outfits", link: "/Outfits", class: menuClasses[4] }
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
                <Menu
                  key={menu.id}
                  data={menu.data}
                  link={menu.link}
                  class={menu.class}
                />
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

  handleClasses = direction => {
    let classArray = menuClasses.slice();
    direction === "up"
      ? this.popUnshift(classArray)
      : direction === "down"
      ? this.pushShift(classArray, 0)
      : null;

    menuClasses = classArray;
  };

  //Handles menu movement by input of either "up" or "down" into (direction)
  handleMenu = direction => {
    let menuArray = this.state.menuData.slice();
    direction === "up"
      ? this.pushShift(menuArray, 0) || this.handleClasses("up")
      : direction === "down"
      ? this.popUnshift(menuArray) || this.handleClasses("down")
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
