import React, { Component } from "react";
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

  handleValue(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
    this.setState({ value: "" });
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
