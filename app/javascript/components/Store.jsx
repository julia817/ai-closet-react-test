import React, { Component } from "react";
import Header from "./components/storeHeader";
import Items from "./components/item-borderless";
import PropTypes from "prop-types";

class Store extends Component {
  state = {
    isDetailed: true,
    topToggle: true,
    bottomToggle: false,
    outerToggle: false,
    shoesToggle: false,

    Data: [
      {
        id: 1,
        itemGenre: "Top",
        itemName: this.props.Data[5].type1,
        color: this.props.Data[5].color1,
        image: this.props.Images[5][0],
        style: "display:none;"
      },
      {
        id: 2,
        itemGenre: "Top",
        itemName: this.props.Data[6].type1,
        color: this.props.Data[6].color1,
        image: this.props.Images[6][0],
        style: "display:none;"
      },
      {
        id: 3,
        itemGenre: "Top",
        itemName: this.props.Data[7].type1,
        color: this.props.Data[7].color1,
        image: this.props.Images[7][0],
        style: "display:none;"
      },
      {
        id: 4,
        itemGenre: "Top",
        itemName: this.props.Data[8].type1,
        color: this.props.Data[8].color1,
        image: this.props.Images[8][0],
        style: "display:none;"
      },
      {
        id: 5,
        itemGenre: "Top",
        itemName: this.props.Data[9].type1,
        color: this.props.Data[9].color1,
        image: this.props.Images[9][0],
        style: "display:none;"
      },
      {
        id: 6,
        itemGenre: "Top",
        itemName: this.props.Data[13].type1,
        color: this.props.Data[13].color1,
        image: this.props.Images[13][0],
        style: "display:none;"
      },
      {
        id: 7,
        itemGenre: "Top",
        itemName: this.props.Data[14].type1,
        color: this.props.Data[14].color1,
        image: this.props.Images[14][0],
        style: "display:none;"
      },
      {
        id: 8,
        itemGenre: "Top",
        itemName: this.props.Data[15].type1,
        color: this.props.Data[15].color1,
        image: this.props.Images[15][0],
        style: "display:none;"
      }
    ]
  };

  updateTops = () => {
    this.setState({
      topToggle: true,
      bottomToggle: false,
      outerToggle: false,
      shoesToggle: false,
      Data: [
        {
          id: 1,
          itemGenre: "Top",
          itemName: this.props.Data[5].type1,
          color: this.props.Data[5].color1,
          image: this.props.Images[5][0],
          style: "display:none;"
        },
        {
          id: 2,
          itemGenre: "Top",
          itemName: this.props.Data[6].type1,
          color: this.props.Data[6].color1,
          image: this.props.Images[6][0],
          style: "display:none;"
        },
        {
          id: 3,
          itemGenre: "Top",
          itemName: this.props.Data[7].type1,
          color: this.props.Data[7].color1,
          image: this.props.Images[7][0],
          style: "display:none;"
        },
        {
          id: 4,
          itemGenre: "Top",
          itemName: this.props.Data[8].type1,
          color: this.props.Data[8].color1,
          image: this.props.Images[8][0],
          style: "display:none;"
        },
        {
          id: 5,
          itemGenre: "Top",
          itemName: this.props.Data[9].type1,
          color: this.props.Data[9].color1,
          image: this.props.Images[9][0],
          style: "display:none;"
        },
        {
          id: 6,
          itemGenre: "Top",
          itemName: this.props.Data[13].type1,
          color: this.props.Data[13].color1,
          image: this.props.Images[13][0],
          style: "display:none;"
        },
        {
          id: 7,
          itemGenre: "Top",
          itemName: this.props.Data[14].type1,
          color: this.props.Data[14].color1,
          image: this.props.Images[14][0],
          style: "display:none;"
        },
        {
          id: 8,
          itemGenre: "Top",
          itemName: this.props.Data[15].type1,
          color: this.props.Data[15].color1,
          image: this.props.Images[15][0],
          style: "display:none;"
        }
      ]
    });
  };

  updateOuter = () => {
    this.setState({
      topToggle: false,
      bottomToggle: false,
      outerToggle: true,
      shoesToggle: false,
      Data: [
        {
          id: 1,
          itemGenre: "Outer",
          itemName: this.props.Data[5].type3,
          color: this.props.Data[5].color3,
          image: this.props.Images[5][2],
          style: "display:none;"
        },
        {
          id: 2,
          itemGenre: "Outer",
          itemName: this.props.Data[6].type3,
          color: this.props.Data[6].color3,
          image: this.props.Images[6][2],
          style: "display:none;"
        },
        {
          id: 3,
          itemGenre: "Outer",
          itemName: this.props.Data[7].type3,
          color: this.props.Data[7].color3,
          image: this.props.Images[7][2],
          style: "display:none;"
        },
        {
          id: 4,
          itemGenre: "Outer",
          itemName: this.props.Data[8].type3,
          color: this.props.Data[8].color3,
          image: this.props.Images[8][2],
          style: "display:none;"
        },
        {
          id: 5,
          itemGenre: "Outer",
          itemName: this.props.Data[9].type3,
          color: this.props.Data[9].color3,
          image: this.props.Images[9][2],
          style: "display:none;"
        },
        {
          id: 6,
          itemGenre: "Outer",
          itemName: this.props.Data[13].type3,
          color: this.props.Data[13].color3,
          image: this.props.Images[13][2],
          style: "display:none;"
        },
        {
          id: 7,
          itemGenre: "Outer",
          itemName: this.props.Data[14].type1,
          color: this.props.Data[14].color1,
          image: this.props.Images[14][2],
          style: "display:none;"
        },
        {
          id: 8,
          itemGenre: "Outer",
          itemName: this.props.Data[15].type1,
          color: this.props.Data[15].color1,
          image: this.props.Images[15][2],
          style: "display:none;"
        }
      ]
    });
  };

  updateShoes = () => {
    this.setState({
      topToggle: false,
      bottomToggle: false,
      outerToggle: false,
      shoesToggle: true,
      Data: [
        {
          id: 1,
          itemGenre: "Shoes",
          itemName: this.props.Data[5].type4,
          color: this.props.Data[5].color4,
          image: this.props.Images[5][3],
          style: "display:none;"
        },
        {
          id: 2,
          itemGenre: "Shoes",
          itemName: this.props.Data[6].type4,
          color: this.props.Data[6].color4,
          image: this.props.Images[6][3],
          style: "display:none;"
        },
        {
          id: 3,
          itemGenre: "Shoes",
          itemName: this.props.Data[7].type4,
          color: this.props.Data[7].color4,
          image: this.props.Images[7][3],
          style: "display:none;"
        },
        {
          id: 4,
          itemGenre: "Shoes",
          itemName: this.props.Data[8].type4,
          color: this.props.Data[8].color4,
          image: this.props.Images[8][3],
          style: "display:none;"
        },
        {
          id: 5,
          itemGenre: "Shoes",
          itemName: this.props.Data[9].type4,
          color: this.props.Data[9].color4,
          image: this.props.Images[9][3],
          style: "display:none;"
        },
        {
          id: 6,
          itemGenre: "Shoes",
          itemName: this.props.Data[13].type4,
          color: this.props.Data[13].color4,
          image: this.props.Images[13][3],
          style: "display:none;"
        },
        {
          id: 7,
          itemGenre: "Shoes",
          itemName: this.props.Data[14].type4,
          color: this.props.Data[14].color4,
          image: this.props.Images[14][3],
          style: "display:none;"
        },
        {
          id: 8,
          itemGenre: "Shoes",
          itemName: this.props.Data[15].type4,
          color: this.props.Data[15].color4,
          image: this.props.Images[15][3],
          style: "display:none;"
        }
      ]
    });
  };
  updateBottom = () => {
    this.setState({
      topToggle: false,
      bottomToggle: true,
      outerToggle: false,
      shoesToggle: false,
      Data: [
        {
          id: 1,
          itemGenre: "Bottoms",
          itemName: this.props.Data[5].type2,
          color: this.props.Data[5].color2,
          image: this.props.Images[5][1],
          style: "display:none;"
        },
        {
          id: 2,
          itemGenre: "Bottoms",
          itemName: this.props.Data[6].type2,
          color: this.props.Data[6].color2,
          image: this.props.Images[6][1],
          style: "display:none;"
        },
        {
          id: 3,
          itemGenre: "Bottoms",
          itemName: this.props.Data[7].type2,
          color: this.props.Data[7].color2,
          image: this.props.Images[7][1],
          style: "display:none;"
        },
        {
          id: 4,
          itemGenre: "Bottoms",
          itemName: this.props.Data[8].type2,
          color: this.props.Data[8].color2,
          image: this.props.Images[8][1],
          style: "display:none;"
        },
        {
          id: 5,
          itemGenre: "Bottoms",
          itemName: this.props.Data[9].type2,
          color: this.props.Data[9].color2,
          image: this.props.Images[9][1],
          style: "display:none;"
        },
        {
          id: 6,
          itemGenre: "Bottoms",
          itemName: this.props.Data[13].type2,
          color: this.props.Data[13].color2,
          image: this.props.Images[13][1],
          style: "display:none;"
        },
        {
          id: 7,
          itemGenre: "Bottoms",
          itemName: this.props.Data[14].type2,
          color: this.props.Data[14].color2,
          image: this.props.Images[14][1],
          style: "display:none;"
        },
        {
          id: 8,
          itemGenre: "Bottoms",
          itemName: this.props.Data[15].type2,
          color: this.props.Data[15].color2,
          image: this.props.Images[15][1],
          style: "display:none;"
        }
      ]
    });
  };
  render() {
    // let mensTops = [
    //   this.props.Images[5][0],
    //   this.props.Images[6][0],
    //   this.props.Images[7][0],
    //   this.props.Images[8][0],
    //   this.props.Images[9][0]
    // ];
    // let mensBottoms = [
    //   this.props.Images[5][1],
    //   this.props.Images[6][1],
    //   this.props.Images[7][1],
    //   this.props.Images[8][1],
    //   this.props.Images[9][1]
    // ];
    // console.log(this.state.Data);

    return (
      <React.Fragment>
        <Header where="Back" link="/" page={this.props.Where} />
        <main>
          <div></div>
          <div className="storefront">
            <div className="menu">
              <ul>
                <li
                  className={this.state.topToggle === true ? "selected" : ""}
                  onClick={this.updateTops}
                >
                  Tops
                </li>
                <li
                  className={this.state.bottomToggle === true ? "selected" : ""}
                  onClick={this.updateBottom}
                >
                  Bottoms
                </li>
                <li
                  className={this.state.outerToggle === true ? "selected" : ""}
                  onClick={this.updateOuter}
                >
                  Outer
                </li>
                <li
                  className={this.state.shoesToggle === true ? "selected" : ""}
                  onClick={this.updateShoes}
                >
                  Shoes
                </li>
              </ul>
            </div>
            <div className="items-div-borderless">
              {this.state.Data.map(item => (
                <Items
                  isDetailed={this.state.isDetailed}
                  key={item.id}
                  style={item.style}
                  image={item.image}
                  itemName={item.itemName}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  Data: PropTypes.array,
  Images: PropTypes.array
};

export default Store;
