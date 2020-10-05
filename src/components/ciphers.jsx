import React from "react";

class Cipher extends React.Component {
  state = {
    selectedMode: "plaintext",
    plainText: "",
    cipherText: "",
    viginearKey: "luck",
    shiftKey: 3
  };
  handleViginearKeyChange = event => {
    this.setState({
      viginearKey: event.target.value
    });
  };
  handleShiftKeyChange = event => {
    this.setState({
      shiftKey: event.target.value
    });
  };
  plainToCipher = event => {
    let plainText = event.target.value;
    plainText = plainText.toUpperCase();
    plainText = plainText.split(" ").join("");
    let key = this.state.viginearKey;
    key = key.toUpperCase();
    var keyLength = 0;
    var answerCharCode = "";
    for (var i = 0; i < plainText.length; i++) {
      answerCharCode += String.fromCharCode(
        parseInt(
          ((plainText[i].charCodeAt() + key[keyLength].charCodeAt()) % 26) + 65
        )
      );

      console.log("Converted: " + answerCharCode);
      if (keyLength === key.length - 1) {
        keyLength = 0;
        continue;
      }
      keyLength++;
    }
    this.setState({
      plainText: answerCharCode
    });
  };
  cipherToPlain = event => {
    let cipherText = event.target.value;
    cipherText = cipherText.toUpperCase();
    cipherText = cipherText.split(" ").join("");

    let key = this.state.viginearKey;
    key = key.toUpperCase();
    var keyLength = 0;
    var answerCharCode = "";
    for (var i = 0; i < cipherText.length; i++) {
      answerCharCode += String.fromCharCode(
        parseInt(
          ((cipherText[i].charCodeAt() - key[keyLength].charCodeAt()) % 26) + 65
        )
      );

      console.log("Converted: " + answerCharCode);
      if (keyLength === key.length - 1) {
        keyLength = 0;
        continue;
      }
      keyLength++;
    }
    this.setState({
      plainText: answerCharCode
    });
  };

  plainToShiftCipher = event => {
    let plainText = event.target.value;
    plainText = plainText.toUpperCase();
    plainText = plainText.split(" ").join("");
    let key = this.state.shiftKey;
    var answerCharCode = "";
    //console.log(((plainText.charCodeAt() - 65 + key)%26)+65)
    for (var i = 0; i < plainText.length; i++) {
      answerCharCode += String.fromCharCode(
        parseInt(((plainText[i].charCodeAt() - 65 + key) % 26) + 65)
      );
    }
    console.log(answerCharCode);
    this.setState({
      plainText: answerCharCode
    });
  };

  shiftCipherToPlain = event => {
    let cipherText = event.target.value;
    cipherText = cipherText.toUpperCase();
    cipherText = cipherText.split(" ").join("");
    let key = this.state.shiftKey;
    key = (26 - key) % 26;
    var answerCharCode = "";
    //console.log(((cipherText.charCodeAt() - 65 + key)%26)+65)
    for (var i = 0; i < cipherText.length; i++) {
      answerCharCode += String.fromCharCode(
        parseInt(((cipherText[i].charCodeAt() - 65 + key) % 26) + 65)
      );
    }
    console.log(answerCharCode);
    this.setState({
      plainText: answerCharCode
    });
  };

  handleSelectMode = event => {
    let selectedMode = event.target.value;
    this.setState({
      selectedMode: selectedMode
    });
  };
  substitutionCipher = event => {
    let plainText = event.target.value;
    var map = {
      a: "q",
      b: "w",
      c: "e",
      d: "r",
      e: "t",
      f: "y",
      g: "u",
      h: "i",
      i: "o",
      j: "p",
      k: "a",
      l: "s",
      m: "d",
      n: "f",
      o: "g",
      p: "h",
      q: "j",
      r: "k",
      s: "l",
      t: "z",
      u: "x",
      v: "c",
      w: "v",
      x: "b",
      y: "n",
      z: "m"
    };
    var Cipher = {};
    Cipher = plainText
      .split("")
      .filter(function(v) {
        // Does the character exist in the map?
        return map.hasOwnProperty(v.toLowerCase());
      })
      .map(function(v) {
        // Replace character by value
        return map[v.toLowerCase()].toUpperCase();
      })
      .join();
    this.setState({
      plainText: Cipher.split(",").join("")
    });
  };

  substitutionDecipher = event => {
    var Plain = {};
    let cipherText = event.target.value;
    var map = {
      a: "q",
      b: "w",
      c: "e",
      d: "r",
      e: "t",
      f: "y",
      g: "u",
      h: "i",
      i: "o",
      j: "p",
      k: "a",
      l: "s",
      m: "d",
      n: "f",
      o: "g",
      p: "h",
      q: "j",
      r: "k",
      s: "l",
      t: "z",
      u: "x",
      v: "c",
      w: "v",
      x: "b",
      y: "n",
      z: "m"
    };

    map = (function() {
      var tmp = {};
      var k;

      // Populate the tmp variable
      for (k in map) {
        if (!map.hasOwnProperty(k)) continue;
        tmp[map[k]] = k;
      }

      return tmp;
    })();

    Plain = cipherText
      .split("")
      .filter(function(v) {
        // Filter out characters that are not in our list
        return map.hasOwnProperty(v.toLowerCase());
      })
      .map(function(v) {
        // Replace old character by new one
        // And make it uppercase to make it look fancier
        return map[v.toLowerCase()].toUpperCase();
      })
      .join("");

    this.setState({
      plainText: Plain.split(",").join("")
    });
  };

  display = selectedOption => {
    if (selectedOption === "Vigenere") {
      return (
        <div>
          <form>
            <label className="radio-inline">
              Encrypt:{" "}
              <input
                type="radio"
                value="plaintext"
                checked={this.state.selectedMode === "plaintext"}
                onChange={this.handleSelectMode}
              />
            </label>
            <label className="radio-inline">
              Decrypt:{" "}
              <input
                type="radio"
                value="ciphertext"
                checked={this.state.selectedMode === "ciphertext"}
                onChange={this.handleSelectMode}
              />
            </label>
          </form>
          <div>
            <input
              type="text"
              placeholder={`Enter your ${this.state.selectedMode}`}
              onChange={
                this.state.selectedMode === "plaintext"
                  ? this.plainToCipher
                  : this.cipherToPlain
              }
            />

            <input
              type="text"
              placeholder="Enter your key"
              onChange={this.handleKeyChange}
            />
          </div>
        </div>
      );
    } else if (selectedOption === "Shift") {
      return (
        <div>
          <form>
            <label className="radio-inline">
              Encrypt:{" "}
              <input
                type="radio"
                value="plaintext"
                checked={this.state.selectedMode === "plaintext"}
                onChange={this.handleSelectMode}
              />
            </label>
            <label className="radio-inline">
              Decrypt:{" "}
              <input
                type="radio"
                value="ciphertext"
                checked={this.state.selectedMode === "ciphertext"}
                onChange={this.handleSelectMode}
              />
            </label>
          </form>
          <div>
            <input
              type="text"
              placeholder={`Enter your ${this.state.selectedMode}`}
              onChange={
                this.state.selectedMode === "plaintext"
                  ? this.plainToShiftCipher
                  : this.shiftCipherToPlain
              }
            />

            <input
              type="number"
              placeholder="Enter your key"
              onChange={this.handleShiftKeyChange}
            />
          </div>
        </div>
      );
    } else if (selectedOption === "Substitution") {
      return (
        <div>
          <form>
            <label className="radio-inline">
              Encrypt:{" "}
              <input
                type="radio"
                value="plaintext"
                checked={this.state.selectedMode === "plaintext"}
                onChange={this.handleSelectMode}
              />
            </label>
            <label className="radio-inline">
              Decrypt:{" "}
              <input
                type="radio"
                value="ciphertext"
                checked={this.state.selectedMode === "ciphertext"}
                onChange={this.handleSelectMode}
              />
            </label>
          </form>
          <div>
            <input
              type="text"
              placeholder={`Enter your ${this.state.selectedMode}`}
              onChange={
                this.state.selectedMode === "plaintext"
                  ? this.substitutionCipher
                  : this.substitutionDecipher
              }
            />
          </div>
        </div>
      );
    }
  };
  render() {
    const { selectedOption } = this.props;
    return (
      <div class="convertededtext">
        {this.display(selectedOption)}
        <h3>Result after Conversion:{this.state.plainText}</h3>
      </div>
    );
  }
}

export default Cipher;
