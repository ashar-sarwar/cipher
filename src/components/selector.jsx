import React from "react";
import Cipher from "./ciphers";
class Selector extends React.Component {
  /* constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
*/
  state = {
    selectedOption: ""
  };
  onValueChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
    console.log(this.state.selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="selector">
        <form className="form-style">
          <label className="radio-inline">
            <input
              type="radio"
              value="Vigenere"
              checked={this.state.selectedOption === "Vigenere"}
              onChange={this.onValueChange}
            />
            Vigenere
          </label>

          <label className="radio-inline">
            <input
              type="radio"
              value="Shift"
              checked={this.state.selectedOption === "Shift"}
              onChange={this.onValueChange}
            />
            Shift
          </label>

          <label className="radio-inline">
            <input
              type="radio"
              value="Substitution"
              checked={this.state.selectedOption === "Substitution"}
              onChange={this.onValueChange}
            />
            Substitution
          </label>

          <label className="radio-inline">
            <input
              type="radio"
              value="Playfair"
              checked={this.state.selectedOption === "Playfair"}
              onChange={this.onValueChange}
            />
            Playfair
          </label>

          <label className="radio-inline">
            <input
              type="radio"
              value="Railfence"
              checked={this.state.selectedOption === "Railfence"}
              onChange={this.onValueChange}
            />
            Railfence
          </label>

          <div className="selectedOptionStyle">
            <Cipher selectedOption={selectedOption} />
          </div>
        </form>
      </div>
    );
  }
}

export default Selector;
