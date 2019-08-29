import React, { Component } from "react";
import "./App.css";
import User from "./Person/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola Mundo</h1>
        <p>parragraph</p>
        <User name="nicolas" age="21">
          Im a Seller
        </User>
        <User name="agsf" age="87">
          {" "}
          Im a User
        </User>
      </div>
    );
  }
}

export default App;
