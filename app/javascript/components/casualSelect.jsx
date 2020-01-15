import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";
class Select_Casual extends Component {
  state = {};
  render() {
    console.log(this.props.Data);
    console.log(this.props.Images);
    return (
      <SelectionPage
        clotheItem={imageCasual}
        title="Casual"
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
