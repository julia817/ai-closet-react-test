import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";

class Select_Casual extends Component {
  state = {};
  render() {
    console.log(this.props.Data);
    let images = [
      this.props.Images[0],
      this.props.Images[1],
      this.props.Images[2],
      this.props.Images[3]
    ];

    return (
      <SelectionPage
        itemOne={images[0]}
        itemTwo={images[1]}
        itemThree={images[2]}
        itemFour={images[3]}
        item5={this.props.Images[4]}
        item6={this.props.Images[5]}
        item7={this.props.Images[6]}
        item8={this.props.Images[7]}
        title1="Coordinate 1"
        title2="Coordinate 2"
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
