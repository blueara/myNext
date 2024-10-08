import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    passwords: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ passwords: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({ clicked: true, validated: this.state.password === "000" });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
