import React, { Component } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import styles from "./Search.module.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  }

  handleValue(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value === "") {
      this.props.setAlert("Please enter username", "alert_light");
    } else {
      this.props.handleSearch(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <form className={styles.form_search} onSubmit={this.handleSubmit}>
        <FiSearch style={{ position: "relative", left: "30px" }} />
        <input
          className={styles.input_search_user}
          type="text"
          placeholder="Enter user..."
          value={this.state.value}
          onChange={this.handleValue}
        />
        <input
          className={styles.btn_search_user}
          type="submit"
          value="Search"
        />
      </form>
    );
  }
}

export default Search;
