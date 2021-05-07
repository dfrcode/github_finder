import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.css";

import Spinner from "../../layout/Spinner/Spinner";

import { FaRegBuilding, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FiMapPin, FiUsers, FiMail, FiLink, FiTwitter } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

const UserItem = ({ user, getUser, match, loading }) => {
  const [color_back, setColorBack] = useState(true);
  const [color_github, setColorGithub] = useState(true);

  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

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
    hireable,
  } = user;

  if (loading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.user_info} style={{ border: "1px solid #eee" }}>
          <img className={styles.user_image} src={avatar_url} alt={login} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</p>
            <p style={{ fontSize: "16px", color: "#272727" }}>{login}</p>
            {bio !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>{bio}</p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>

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
                <Link to={{ pathname: blog }} rel="noreferrer" target="_blank">
                  {blog}
                </Link>
              </p>
            )}
            {twitter_username !== "" && twitter_username !== null && (
              <p style={{ fontSize: "12px", padding: "5px 0" }}>
                <FiTwitter />{" "}
                <Link
                  to={{ pathname: `https://twitter.com/${twitter_username}` }}
                  rel="noreferrer"
                  target="_blank"
                >
                  @{twitter_username}
                </Link>
              </p>
            )}
            {hireable !== false && hireable !== null ? (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px 0",
                }}
              >
                <FaCheckCircle style={{ marginRight: "5px", fill: "green" }} />{" "}
                hariabled
              </p>
            ) : (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaTimesCircle style={{ marginRight: "5px", fill: "red" }} />{" "}
                not hariabled
              </p>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  margin: "10px 0",
                  marginRight: "5px",
                  padding: "5px 12px",
                  fontSize: "12px",
                  backgroundColor: color_back ? "#eee" : "#272727",
                  color: color_back ? "#222" : "#fff",
                  transition: "background-color 0.2s linear, color 0.2s linear",
                }}
                onMouseOver={() => setColorBack(false )}
                onMouseLeave={() => setColorBack(true )}
              >
                Back to Search
              </Link>
              <Link
                to={{ pathname: `https://github.com/${login}` }}
                style={{
                  margin: "10px 0",
                  marginLeft: "5px",
                  padding: "5px 12px",
                  fontSize: "12px",
                  backgroundColor: color_github ? "#272727" : "#eee",
                  color: color_github ? "#fff" : "#222",
                  transition: "background-color 0.2s linear, color 0.2s linear",
                }}
                rel="noreferrer"
                target="_blank"
                onMouseOver={() => setColorGithub(false )}
                onMouseLeave={() => setColorGithub(true )}
              >
                To github profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserItem;
