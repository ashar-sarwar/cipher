import React from "react";

import "./App.css";
import Cipher from "./components/ciphers";
import Selector from "./components/selector";
function App() {
  return (
    <div className="App">
      <h1>Name : Muhammad Ashar Sarwar</h1>
      <h2>Seat No: B16101084</h2>
      <h2>Section : A</h2>
      <h3>Subject: Cryptography</h3>
      <Selector />
    </div>
  );
}

export default App;
