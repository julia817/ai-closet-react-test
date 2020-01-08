import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  state = {
    name: "",
    formData: [
      {
        id: 1,
        label: "姓",
        name: "last-name",
        placeholder: "山田",
        inputData: ""
      },
      {
        id: 2,
        label: "名",
        name: "first-name",
        placeholder: "太郎",
        inputData: ""
      },
      {
        id: 3,
        label: "姓（カタカナ）",
        name: "last-name-kana",
        placeholder: "ヤマダ",
        inputData: ""
      },
      {
        id: 4,
        label: "名（カタカナ）",
        name: "first-name-kana",
        placeholder: "タロウ",
        inputData: ""
      }
    ]
  };
  handleChange = event => {
    this.setState({ inputData: this.input.current.value });
    event.preventDefault();
    console.log(this.state.inputData);
  };
  render() {
    function FormData(props) {
      return (
        <span>
          <label>{props.label}</label>
          <input
            type="text"
            name={props.name}
            placeholder={props.placeholder}
          />
        </span>
      );
    }

    return (
      <React.Fragment>
        <header>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <main className="login">
          <img
            className="login-tree"
            src={require("../../assets/images/circuit-tree.png")}
            alt=""
          />
          <div className="login-text">
            <h1>Hi.</h1>
            <h1>Tell me about yourself.</h1>
          </div>
          <div className="form-wrapper">
            <h2>名前</h2>
            <form action="">
              {this.state.formData.map(data => (
                <FormData
                  key={data.id}
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  value={this.input}
                  onChange={this.handleChange}
                />
              ))}

              <span>
                <h2>生年月日</h2>
                <input type="date" name="DOB" id="DOB" />
              </span>

              <span>
                <h2>性別</h2>
                <span className="radio">
                  <input type="radio" name="man" value="man" id=""></input>
                  <p>男性</p>
                  <input
                    type="radio"
                    name="man"
                    value="woman"
                    id=""
                  ></input>{" "}
                  <p>女性</p>
                  <input type="radio" name="man" value="other" id=""></input>
                  <p>その他</p>
                </span>
              </span>

              <span>
                <h2>国</h2>

                <input
                  className="country"
                  type="text"
                  name="country"
                  placeholder="日本"
                />
              </span>
            </form>
          </div>
          <a href="/about_you">
            <button className="btn-primary">次へ</button>
          </a>
        </main>
      </React.Fragment>
    );
  }
}

{
  /* <span>
                <label>名</label>
                <input type="text" name="last_name" placeholder="入力" />
              </span>
              <span>
                <label>姓 (カタカナ)</label>
                <input type="text" name="last_name" placeholder="入力" />
              </span>
              <span>
                <label>名 (カタカナ)</label>
                <input type="text" name="last_name" placeholder="入力" />
              </span> */
}

export default Login;
