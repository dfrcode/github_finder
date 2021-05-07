import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.css";

import Header from "../../layout/Header/Header";
import Alert from "../../layout/Alert/Alert";
import Search from "../Search/Search";
import Users from "../Users/Users";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import About from "../../pages/About/About";
import UserItem from "../../pages/UserItem/UserItem";
import Footer from "../../layout/Footer/Footer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
      );
      setUsers(res.data);
      setLoading(false);
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  const handleSearch = async (value) => {
    setUser(value);
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getUser = async (user) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET_ID}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const handleClear = () => {
    setUsers([]);
  };

  const setAlertFunc = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search
                    handleSearch={handleSearch}
                    checkUsers={users.length > 0 ? true : false}
                    setAlertFunc={setAlertFunc}
                  />
                  <div className={styles.container_users}>
                    <Users
                      users={users}
                      user={user}
                      loading={loading}
                      handleClear={handleClear}
                      checkUsers={users.length > 0 ? true : false}
                    />
                  </div>
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/users/:login"
              render={(props) => (
                <UserItem
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
