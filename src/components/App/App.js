import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";

import { BiGitBranch } from "react-icons/bi";

import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      title: "GitHub Finder",
      icon: <BiGitBranch style={{ fontSize: "26px" }} />,
      date: new Date(),
    };
  }

  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header icon={this.state.icon} title={this.state.title} />
        <div className={styles.container}></div>
        <Footer date={this.state.date} />
      </div>
    );
  }
}

export default App;
