import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>Denis Frolov {props.date.getFullYear()}&copy;</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Footer;
