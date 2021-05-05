import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Users.module.css";

import User from "./User/User";
import { FaTimes } from "react-icons/fa";

const Users = (props) => {

  const [over, setOver] = useState(false);
  if (!props.checkUsers) {
    return (
      <div className={`${styles.users} ${styles.not_users}`}>
        
      </div>
    );
  } else {
    return (
      <div className={styles.users}>
        <div className={styles.users_clear}>
          <FaTimes
            className={styles.btn_clear}
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            fill={over ? "rgb(197, 53, 53)" : "rgb(0, 0, 0)"}
            onClick={props.handleClear}
          />
        </div>
        <div className={styles.users_container}>
          {props.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  checkUsers: PropTypes.bool.isRequired,
};

export default Users;
