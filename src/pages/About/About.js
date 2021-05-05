import React, { Fragment } from "react";
import styles from "./About.module.css";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = ({ img_url, github_url, linkedin_url }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <p className={styles.title}>Github Finder</p>
          </div>
          <div className={styles.content}>
            <img src={img_url} alt="author" />
            <p>Denis Frolov</p>
            <ul className={styles.list}>
              <a href={github_url} target="_blank" rel="noreferrer">
                <li className={styles.list_item}>
                  <FaGithubSquare />
                </li>
              </a>
              <a href={linkedin_url} target="_blank" rel="noreferrer">
                <li className={styles.list_item}>
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

About.defaultProps = {
  img_url:
    "https://avatars.githubusercontent.com/u/80001071?s=400&u=b00c9e1ab0c412fc6bcdf00f073aad14fc5a2f6f&v=4",
  github_url: "https://github.com/dfrcode",
  linkedin_url: "https://www.linkedin.com/in/dfr8938/",
};

export default About;
