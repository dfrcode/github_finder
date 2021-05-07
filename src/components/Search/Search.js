import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import styles from "./Search.module.css";

const Search = ({ setAlert, handleSearch }) => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setAlert("Please enter username", "alert_light");
    } else {
      handleSearch(value);
      setValue("");
    }
  };

  return (
    <form className={styles.form_search} onSubmit={handleSubmit}>
      <FiSearch style={{ position: "relative", left: "30px" }} />
      <input
        className={styles.input_search_user}
        type="text"
        placeholder="Enter user..."
        value={value}
        onChange={handleValue}
      />
      <input className={styles.btn_search_user} type="submit" value="Search" />
    </form>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
