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

    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );

    this.setState({ users: res.data, loading: false });
  }

  async handleSearch(value) {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );
    this.setState({ users: res.data.items, loading: false });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header icon={this.state.icon} title={this.state.title} />
        <div className={styles.container}>
          <Search
            handleText={this.handleText}
            handleSearch={this.handleSearch}
          />
          <div className={styles.container_users}>
            <Users users={this.state.users} loading={this.state.loading} />
          </div>
        </div>
        <Footer date={this.state.date} />
      </div>
    );
  }
}

export default App;
