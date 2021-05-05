import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.css";

import { BiGitBranch } from "react-icons/bi";

import Header from "../../layout/Header/Header";
import Alert from "../../layout/Alert/Alert";
import Search from "../Search/Search";
import Users from "../Users/Users";
import About from "../../pages/About/About";
import Footer from "../../layout/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: "",
      loading: false,
      title: "GitHub Finder",
      icon: <BiGitBranch style={{ fontSize: "26px" }} />,
      date: new Date(),
      alert: null,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.setAlert = this.setAlert.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );

    this.setState({ users: res.data, loading: false });
  }

  async handleSearch(value) {
    this.setState({ user: value, loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );
    this.setState({ users: res.data.items, loading: false });
  }

  handleClear() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    return (
      <Router>
        <div className={styles.wrapper}>
          <Header icon={this.state.icon} title={this.state.title} />
          <div className={styles.container}>
            <Alert alert={this.state.alert} />
            <Route
              exact
              path="/"
              render={() => (
                <Switch>
                  <Fragment>
                    <Search
                      handleText={this.handleText}
                      handleSearch={this.handleSearch}
                      checkUsers={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <div className={styles.container_users}>
                      <Users
                        users={this.state.users}
                        user={this.state.user}
                        loading={this.state.loading}
                        handleClear={this.handleClear}
                        checkUsers={this.state.users.length > 0 ? true : false}
                      />
                    </div>
                  </Fragment>
                </Switch>
              )}
            ></Route>
            <Route exact path="/about" component={About} />
          </div>
          <Footer date={this.state.date} />
        </div>
      </Router>
    );
  }
}

export default App;
