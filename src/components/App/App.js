import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.css";

import { BiGitBranch } from "react-icons/bi";

import Header from "../../layout/Header/Header";
import Search from "../Search/Search";
import Users from "../Users/Users";
import Footer from "../../layout/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
      title: "GitHub Finder",
      icon: <BiGitBranch style={{ fontSize: "26px" }} />,
      date: new Date(),
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header icon={this.state.icon} title={this.state.title} />
        <div className={styles.container}>
          <Search />
          <div className={styles.container_users}>
            <Users users={this.state.users} />
          </div>
        </div>
        <Footer date={this.state.date} />
      </div>
    );
  }
}

export default App;
