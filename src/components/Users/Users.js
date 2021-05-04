import React from "react";
import PropTypes from "prop-types";
import styles from "./Users.module.css";

import User from "./User/User";

const Users = (props) => {
  return (
    <div className={styles.users}>
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
