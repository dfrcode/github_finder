import React, { Component } from "react";
import styles from "./UserItem.module.css";

class UserItem extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      bio,
      avatar_url,
      login,
      followers,
      following,
      public_repos,
    } = this.props.user;

    return (
      <div className={styles.container}>
        <div className={styles.user_info}>
          <img className={styles.user_image} src={avatar_url} alt={login} />
          <div
            style={{
              width: "200px",
              borderTop: "1px solid #eee",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            <p>
              <span>Name:</span> {name}
            </p>
            <p>
              <span>Username:</span> {login}
            </p>
          </div>
          <div
            style={{
              width: "200px",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            <p>
              <span>Bio:</span> {bio}
            </p>
          </div>
          <div
            style={{
              width: "200px",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            <p>
              <span>Repos:</span> {public_repos}
            </p>
            <p>
              <span>Following:</span> {following}
            </p>
            <p>
              <span>Followers:</span> {followers}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
