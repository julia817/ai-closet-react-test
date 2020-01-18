import React, { Component } from "react";
import Header from "./components/Header_back_Logo";
import femaleImage from "../../assets/images/coordinates/f_casual/1/1.jpg";
import maleImage from "../../assets/images/casual.jpg";
class GenderSelect extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header where="Back" link="/" />
        <main>
          <div className="sidebyside">
            <h2 className="font-40px">Choose your gender</h2>
            <a className="genderLink" href="/AiCoordinate-Female">
              <div className="items-div">
                <h2 className="font-34px">Female</h2>
                <div className="img-item">
                  <img src={femaleImage}></img>
                </div>
              </div>
            </a>
            <a className="genderLink" href="/AiCoordinate-Male">
              <div className="items-div">
                <h2 className="font-34px">Male</h2>
                <div className="img-item">
                  <img src={maleImage}></img>
                </div>
              </div>
            </a>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default GenderSelect;
