import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.form_search}>
    <FiSearch style={{position: "relative", left: "30px"}}/>
      <input
        className={styles.input_search_user}
        type="text"
        placeholder="Enter user..."
      />
      <input className={styles.btn_search_user} type="submit" value="Search" />
    </form>
  );
};

export default Search;
