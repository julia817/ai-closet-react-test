import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";
import Menu from "./components/menu";
// Array declaration. I do it here for easier manipulation
let menuText = ["Choose for me", "Let me choose", "Store", "Outfits"];
let menuLinks = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];

// App.propTypes = {
//   weather: PropTypes.string,
//   degree: PropTypes.string
// };

class App extends Component {
  state = {
    menuArray: menuText,
    menuLinks: menuLinks,
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
      onSwipedUp: () => {
        this.handleMenu("up");
      },
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
        {/* <div>
          <h3>今の天気は {weather}です。</h3>
          <h3>今の気温は {this.props.temperature}&#176;</h3>
        </div> */}
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
  /* <li key={menu.id} data={menu.data} /> */
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
    menuLinks = spliceLinks;
    menuText = menuArray;
    this.setState({
      menuArray: menuText,
      menuLinks: menuLinks,
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

// menuData: [
//   { id: 1, data: <a href={links[0]}>{arr[0]}</a> },
//   { id: 2, data: <a href="#">{arr[1]}</a> },
//   { id: 3, data: <a href="#">{arr[2]}</a> },
//   { id: 4, data: <a href="#">{arr[3]}</a> }
// ];
