import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        {props.icon} {props.title}
      </div>
    </header>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
