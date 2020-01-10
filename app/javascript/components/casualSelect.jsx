import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageCasual from "../../assets/images/casual.jpg";
class Select_Casual extends Component {
  state = {};
  render() {
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
