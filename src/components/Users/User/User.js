import React from "react";
import PropTypes from "prop-types";
import styles from "./User.module.css";

import Spinner from "../../../layout/Spinner/Spinner";

const User = (props) => {
  const { login, avatar_url, html_url } = props.user;
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div className={styles.user}>
        <img src={avatar_url} alt={login} />
        <p>{login}</p>
        <a href={html_url} rel="noreferrer nofollow" target="_blank">
          See
        </a>
      </div>
    );
  }
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.string,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string,
};

export default User;
