import React, { Component } from "react";
import styles from "./UserItem.module.css";

import { FaRegBuilding } from "react-icons/fa";
import { FiMapPin, FiUsers, FiMail, FiLink, FiTwitter } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

class UserItem extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      email,
      bio,
      company,
      location,
      blog,
      avatar_url,
      login,
      followers,
      following,
      public_repos,
      twitter_username,
    } = this.props.user;

    return (
      <div className={styles.container}>
        <div className={styles.user_info}>
          <img className={styles.user_image} src={avatar_url} alt={login} />
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</p>
          <p style={{ fontSize: "16px", color: "#272727" }}>{login}</p>
          {bio !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>{bio}</p>
          )}
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              padding: "10px 0",
            }}
          >
            <FiUsers style={{ marginRight: "3px" }} />{" "}
            {Number.parseInt(followers) > 1000
              ? `${(Number.parseInt(followers) / 1000).toFixed(1)}k`
              : followers}{" "}
            followers &bull;{" "}
            {Number.parseInt(following) > 1000
              ? `${(Number.parseInt(following) / 1000).toFixed(1)}k`
              : following}{" "}
            following &bull; <GoRepo style={{ marginLeft: "3px" }} />{" "}
            {public_repos}
          </p>
          {company !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>
              <FaRegBuilding /> {company}
            </p>
          )}
          {location !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>
              <FiMapPin /> {location}
            </p>
          )}
          {email !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>
              <FiMail /> {email}
            </p>
          )}
          {blog !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>
              <FiLink />{" "}
              <a href={blog} rel="noreferrer" target="_blank">
                {blog}
              </a>
            </p>
          )}
          {twitter_username !== null && (
            <p style={{ fontSize: "12px", padding: "5px 0" }}>
              <FiTwitter />{" "}
              <a
                href={`https://twitter.com/${twitter_username}`}
                rel="noreferrer"
                target="_blank"
              >
                @{twitter_username}
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default UserItem;
