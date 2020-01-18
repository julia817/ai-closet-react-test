import React, { Component } from "react";
import Item from "./components/item";
import imageCasual from "../../assets/images/casual.jpg";
import imageBizCas from "../../assets/images/businesscas.jpg";
import imagesuit from "../../assets/images/suit.jpg";
import imageCasualFemale from "../../assets/images/coordinates/f_casual/1/1.jpg";
import imageBizCasFemale from "../../assets/images/businesscasf.jpg";
import imagesuitFemale from "../../assets/images/suitf.jpg";
// importing routing pages

class AiCoordinate extends Component {
  render() {
    let Gender = this.props.Gender;

    let item = [
      {
        id: 1,
        itemName: "Casual",
        image: Gender === "Female" ? imageCasualFemale : imageCasual,
        link: "/AiCoordinate-Casual-" + Gender
      },
      {
        id: 2,
        itemName: "Business Casual",
        image: Gender === "Female" ? imageBizCasFemale : imageBizCas,
        link: "/AiCoordinate-BusinessCasual-" + Gender
      },
      {
        id: 3,
        itemName: "Formal",
        image: Gender === "Female" ? imagesuitFemale : imagesuit,
        link: "/AiCoordinate-Formal-" + Gender
      }
    ];

    const genderChange = {};
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
            {item.map(item => (
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
