import React from "react";
import ReactDOM from "react-dom";
import "../scss/style.scss";
import LetMeChoose from "../components/LetMeChoose";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<LetMeChoose />, document.getElementById("myself"));
  });
  