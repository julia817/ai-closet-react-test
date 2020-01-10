import React, { Component } from "react";
import SelectionPage from "./components/ai_selection";
import imagesuit from "../../assets/images/suit.jpg";
class Formal_Selection extends Component {
  render() {
    return <SelectionPage clotheItem={imagesuit} title="Formal" />;
  }
}

export default Formal_Selection;
