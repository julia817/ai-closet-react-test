import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import Head from "./components/Header_back_Logo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";

class Select_Casual extends Component {
  state = {};
  render() {
    let Gender = this.props.Gender;
    let style = this.props.Type;

    const coordinateOne = this.props.Images[0] || "";
    const coordinateTwo = this.props.Images[1] || "";
    const coordinateThree = this.props.Images[2] || "";
    const coordinateFour = this.props.Images[3] || "";
    const coordinateFive = this.props.Images[4] || "";

    let cooData = [
      {
        id: 1,
        link: "/AiCoordinate-finalSelection-" + Gender + "-" + style + "-c1",
        image: coordinateOne[0],
        image2: coordinateOne[1],
        image3: coordinateOne[2],
        image4: coordinateOne[3]
      },
      {
        id: 2,
        link: "/AiCoordinate-finalSelection-" + Gender + "-" + style + "-c2",
        image: coordinateTwo[0],
        image2: coordinateTwo[1],
        image3: coordinateTwo[2],
        image4: coordinateTwo[3]
      },
      {
        id: 3,
        link: "/AiCoordinate-finalSelection-" + Gender + "-" + style + "-c3",
        image: coordinateThree[0],
        image2: coordinateThree[1],
        image3: coordinateThree[2],
        image4: coordinateThree[3]
      },
      {
        id: 4,
        link: "/AiCoordinate-finalSelection-" + Gender + "-" + style + "-c4",
        image: coordinateFour[0],
        image2: coordinateFour[1],
        image3: coordinateFour[2],
        image4: coordinateFour[3]
      },
      {
        id: 5,
        link: "/AiCoordinate-finalSelection-" + Gender + "-" + style + "-c5",
        image: coordinateFive[0],
        image2: coordinateFive[1],
        image3: coordinateFive[2],
        image4: coordinateFive[3]
      }
    ];

    return (
      <div className="body">
        <Head
          where="Back"
          link={
            this.props.Gender === "m"
              ? "/AiCoordinate-Male"
              : this.props.Gender === "w"
              ? "/AiCoordinate-Female"
              : null
          }
        />
        <main>
          <Carousel showStatus={false} showThumbs={false}>
            {cooData.map(item => (
              <SelectionPage
                title="Coordinate"
                key={item.id}
                link={item.link}
                images={item.image}
                images2={item.image2}
                images3={item.image3}
                images4={item.image4}
              />
            ))}
            <div>
              <img className="none" src="assets/6.jpeg" />
              <p className="none">Legend 6</p>
            </div>
          </Carousel>
        </main>
      </div>
    );
  }
}
Select_Casual.propTypes = {
  Data: PropTypes.array,
  Images: PropTypes.array,
  Gender: PropTypes.string
  // temperature: PropTypes.String
};
export default Select_Casual;
