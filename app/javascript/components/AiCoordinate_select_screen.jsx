import React, { Component } from "react";
import LogoBackHead from "./components/Header_back_Logo";
import Item from "./components/item";
class AiSelectedItems extends Component {
  state = {
    header: { where: "Back", link: "#" },
    comment: "猫好きですね！",
    isDetailed: false,
    item: [
      {
        id: 1,
        itemName: "Test",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 2,
        itemName: "aaa",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 3,
        itemName: "HogeHoge",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 4,
        itemName: "Test",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 5,
        itemName: "aaa",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      },
      {
        id: 6,
        itemName: "HogeHoge",
        image: "http://lorempixel.com/output/cats-q-c-300-300-9.jpg"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <LogoBackHead
          where={this.state.header.where}
          link={this.state.header.link}
        />

        <main>
          <h2 className="font-32px">{this.state.comment}</h2>
          <div className="items-div">
            {this.state.item.map(item => (
              <Item
                key={item.id}
                itemName={item.itemName}
                image={item.image}
                isDetailed={this.state.isDetailed}
              />
            ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default AiSelectedItems;
