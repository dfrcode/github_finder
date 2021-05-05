import React from "react";
import styles from "./Spinner.module.css";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="spinner" style={{ width: "150px" }} />
    </div>
  );
};

export default Spinner;
