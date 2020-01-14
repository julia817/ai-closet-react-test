import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
import PropTypes from "prop-types";
class Select_Casual extends Component {
  state = {};
  render() {
    console.log(this.props.Data);
    return (
      <SelectionPage
        clotheItem={imageCasual}
        title="Casual"
        link="/AiCoordinate-Check"
      />
    );
  }
}

export default Select_Casual;
