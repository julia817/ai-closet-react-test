import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";

class Select_Casual extends Component {
  state = {};
  render() {
    console.log(this.props.Data);
    console.log(this.props.Images);
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
        link="/AiCoordinate-Check"
      />
    );
  }
}
Select_Casual.propTypes = {
  Data: PropTypes.array,
  Images: PropTypes.array
  // temperature: PropTypes.String
};
export default Select_Casual;
