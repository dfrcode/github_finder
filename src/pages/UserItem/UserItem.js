import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.css";

import Spinner from "../../layout/Spinner/Spinner";

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

    if (this.props.loading) {
      return (
        <div className={styles.container}>
          <Spinner />
        </div>
      );
    } else {
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
              following &bull; <GoRepo style={{ margin: "0 3px" }} />{" "}
              {public_repos}
            </p>
            {company !== "" && company !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FaRegBuilding /> {company}
              </p>
            )}
            {location !== "" && location !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FiMapPin /> {location}
              </p>
            )}
            {email !== "" && email !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FiMail /> {email}
              </p>
            )}
            {blog !== "" && blog !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FiLink />{" "}
                <Link to={{pathname: blog}} rel="noreferrer" target="_blank">
                  {blog}
                </Link>
              </p>
            )}
            {twitter_username !== "" && twitter_username !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FiTwitter />{" "}
                <Link
                  to={{ pathname:`https://twitter.com/${twitter_username}`}}
                  rel="noreferrer"
                  target="_blank"
                >
                  @{twitter_username}
                </Link>
              </p>
            )}
          </div>
        </div>
      );
    }
  }
}

export default UserItem;
