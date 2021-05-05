import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.header_logo}>
          {props.icon} {props.title}
        </div>
      </Link>
      <ul className={styles.list}>
        <Link to="/">
          <li className={styles.list_item}>Home</li>
        </Link>
        <Link to="/about">
          <li className={styles.list_item}>About</li>
        </Link>
      </ul>
    </header>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
