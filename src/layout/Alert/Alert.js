import React from "react";
import styles from "./Alert.module.css";

import { FaInfoCircle } from "react-icons/fa";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`${styles.alert} ${styles[alert.type]}`}>
        <div className={styles.alert_container}>
          <FaInfoCircle style={{ fontSize: "22px", margin: "0 10px" }} />
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
