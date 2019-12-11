/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// console.log("Hello World from Webpacker");
// Support component names relative to this directory:
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from "react";
// import ReactDOM from "react-dom";
import "../scss/style.scss";

// import App from "../components/App";
// import LetMeChoose from "../components/LetMeChoose";

// import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import AiCoordinate from "../components/AiCoordinate";

var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

// const routing = (
//   <Router>
//     <Route exact path="/" render={() => <Redirect to="/app" />} />
//     <Route path="/app" component={App} />
//     <Route path="/AiCoordinate" component={AiCoordinate} />
//     <Route path="/LetMeChoose" component={LetMeChoose} />
//   </Router>
// );

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(routing, document.getElementById("root"));
//   //ReactDOM.render(<App />, document.getElementById("root"));
//   //ReactDOM.render(<AiCoordinate />, document.getElementById("ai"));
// });
