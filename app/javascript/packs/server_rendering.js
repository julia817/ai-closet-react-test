// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import "../scss/style.scss";
import App from "../components/App";
import LetMeChoose from "../components/LetMeChoose";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AiCoordinate from "../components/AiCoordinate";

var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

const routing = (
  <Router>
    <Route exact path="/" render={() => <Redirect to="/app" />} />
    <Route path="/app" component={App} />
    <Route path="/AiCoordinate" component={AiCoordinate} />
    <Route path="/LetMeChoose" component={LetMeChoose} />
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(routing, document.getElementById("root"));
  //ReactDOM.render(<App />, document.getElementById("root"));
  //ReactDOM.render(<AiCoordinate />, document.getElementById("ai"));
});
