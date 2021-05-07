import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ date }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>Denis Frolov {date.getFullYear()}&copy;</p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  date: new Date(),
};

Footer.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Footer;
