import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Meta extends Component {
  render() {
    return (
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
    );
  }
}

export default Meta;
