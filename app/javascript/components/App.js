import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";
// Array declaration. I do it here for easier manipulation
let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];

// App.propTypes = {
//   weather: PropTypes.string,
//   degree: PropTypes.string
// };

class App extends Component {
  state = {
    menuArray: arr,
    menuLinks: links,
    menuData: [
      { id: 1, data: <a href={links[0]}>{arr[0]}</a> },
      { id: 2, data: <a href="#">{arr[1]}</a> },
      { id: 3, data: <a href="#">{arr[2]}</a> },
      { id: 4, data: <a href="#">{arr[3]}</a> }
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

    console.log(this.props.weather);

    return (
      <div className="body">
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div>
          <h3>今の天気：{this.props.weather}</h3>
          <h3>今の気温：{this.props.temperature}</h3>
        </div>
        <div id="main">
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              {this.state.menuData.map(menu => (
                <li key={menu.id}>{menu.data}</li>
              ))}
            </ul>
          </Swipeable>
        </div>
      </div>
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

  //Handles menu movement by input of either "up" or "down" into (direction)
  handleMenu = direction => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    if (direction === "up") {
      this.pushShift(menuArray, 0);
      this.pushShift(spliceLinks, 0);
    }
    if (direction === "down") {
      this.popUnshift(menuArray);
      this.popUnshift(spliceLinks);
    }

    // then updates the state
    links = spliceLinks;
    arr = menuArray;
    this.setState({
      menuArray: arr,
      menuLinks: links,
      menuData: [
        { id: 1, data: <a href={links[0]}>{arr[0]}</a> },
        { id: 2, data: <a href="#">{arr[1]}</a> },
        { id: 3, data: <a href="#">{arr[2]}</a> },
        { id: 4, data: <a href="#">{arr[3]}</a> }
      ]
    });
  };
}

App.propTypes = {
  // weather: PropTypes.string
  // temperature: PropTypes.String
};

export default App;
