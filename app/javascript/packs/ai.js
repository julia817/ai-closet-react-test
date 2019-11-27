import React from "react";
import ReactDOM from "react-dom";
import "../scss/style.scss";
import AiCoordinate from "../components/AiCoordinate";

document.addEventListener("DOMContentLoaded", () => {
    //ReactDOM.render(<AiCoordinate />, document.getElementById("ai"));
    ReactDOM.render(
      <AiCoordinate/>,
      document.body.appendChild(document.createElement('div')),
    )
  });
  