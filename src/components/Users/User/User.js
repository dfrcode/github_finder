import React from "react";
import PropTypes from "prop-types";
import styles from "./User.module.css";

const User = (props) => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <p>{login}</p>
      <a href={html_url} rel="noreferrer nofollow" target="_blank">
        See
      </a>
    </div>
  );
};

User.propTypes = {
  login: PropTypes.string,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string,
};

export default User;
