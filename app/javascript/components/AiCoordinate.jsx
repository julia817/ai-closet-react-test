import React, { Component } from "react";
import Item from "./components/item";
import imageCasual from "../../assets/images/casual.jpg";
import imageBizCas from "../../assets/images/businesscas.jpg";
import imagesuit from "../../assets/images/suit.jpg";

// importing routing pages

class AiCoordinate extends Component {
  state = {
    item: [
      {
        id: 1,
        itemName: "Casual",
        image: imageCasual,
        link: "/AiCoortinate-Casual"
      },
      {
        id: 2,
        itemName: "Business Casual",
        image: imageBizCas,
        link: "/AiCoortinate-BusinessCasual"
      },
      {
        id: 3,
        itemName: "Formal",
        image: imagesuit,
        link: "/AiCoortinate-Formal"
      }
    ]
  };
  render() {
    return (
      <div className="body">
        <header>
          <a href="/">
            <button className="btn btn-secondary">Back</button>
          </a>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <main>
          <div className="items-div">
            {this.state.item.map(item => (
              <Item
                key={item.id}
                itemName={item.itemName}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default AiCoordinate;
