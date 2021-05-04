import React, { Component } from "react";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello world!",
    };
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
