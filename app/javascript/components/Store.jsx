import React, { Component } from "react";
import Header from "./components/storeHeader";
import Items from "./components/item-borderless";
class Store extends Component {
  state = {
    isDetailed: true
  };
  render() {
    let mensTops = [
      this.props.Images[5][0],
      this.props.Images[6][0],
      this.props.Images[7][0],
      this.props.Images[8][0],
      this.props.Images[9][0]
    ];
    let mensBottoms = [
      this.props.Images[5][1],
      this.props.Images[6][1],
      this.props.Images[7][1],
      this.props.Images[8][1],
      this.props.Images[9][1]
    ];

    let Data = [
      {
        id: 1,
        itemGenre: "Top",
        itemName: this.props.Data[5].type1,
        color: this.props.Data[5].color1,
        image: mensTops[0],
        style: "display:none;"
      },
      {
        id: 2,
        itemGenre: "Top",
        itemName: this.props.Data[6].type1,
        color: this.props.Data[6].color1,
        image: mensTops[1],
        style: "display:none;"
      },
      {
        id: 3,
        itemGenre: "Top",
        itemName: this.props.Data[7].type1,
        color: this.props.Data[7].color1,
        image: mensTops[2],
        style: "display:none;"
      },
      {
        id: 4,
        itemGenre: "Top",
        itemName: this.props.Data[8].type1,
        color: this.props.Data[8].color1,
        image: mensTops[3],
        style: "display:none;"
      },
      {
        id: 5,
        itemGenre: "Top",
        itemName: this.props.Data[9].type1,
        color: this.props.Data[9].color1,
        image: mensTops[4],
        style: "display:none;"
      }
    ];
    return (
      <React.Fragment>
        <Header where="Back" link="/" page={this.props.Where} />
        <main>
          <div></div>
          <div className="storefront">
            <div className="menu">
              <ul>
                <li>Tops</li>
                <li>Bottoms</li>
                <li>Outer</li>
                <li>Shoes</li>
              </ul>
            </div>
            <div className="items-div-borderless">
              {Data.map(item => (
                <Items
                  isDetailed={this.state.isDetailed}
                  key={item.id}
                  style={item.style}
                  image={item.image}
                  itemName={item.itemName}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Store;
