import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imageBizCas from "../../assets/images/businesscas.jpg";

class Business_Select extends Component {
  render() {
    return <SelectionPage clotheItem={imageBizCas} title="Business Casual" />;
  }
}

export default Business_Select;
