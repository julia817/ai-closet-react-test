import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";

class Select_Casual extends Component {
  state = {};
  render() {
    console.log(this.props.Gender);
    console.log(this.props.Images);

    let Gender = this.props.Gender;
    const coordinateOne = this.props.Images[0];
    const coordinateTwo = this.props.Images[1];
    const coordinateThree = this.props.Images[2];
    const coordinateFour = this.props.Images[3];
    const coordinateFive = this.props.Images[4];

    return (
      <SelectionPage
        page1={coordinateOne}
        page2={coordinateTwo}
        page3={coordinateThree}
        page4={coordinateFour}
        page5={coordinateFive}
        title="Coordinate"
        link1={"/AiCoordinate-finalSelection-" + Gender + "-c1"}
        link2={"/AiCoordinate-finalSelection-" + Gender + "-c2"}
        link3={"/AiCoordinate-finalSelection-" + Gender + "-c3"}
        link4={"/AiCoordinate-finalSelection-" + Gender + "-c4"}
        link5={"/AiCoordinate-finalSelection-" + Gender + "-c5"}
      />
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
