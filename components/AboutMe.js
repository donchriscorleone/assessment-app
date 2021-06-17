import React from "react";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <img
        src="https://avatars.githubusercontent.com/u/70317794?v=4"
        alt="profile"
        className={styles.image}
      />
      <h1 className={styles.aboutTitle}>The Developer</h1>
      <a
        href="https://facebook.com/penpenlajom"
        target="_blank"
        className={styles.tag}
      >
        Facebook
      </a>
      <a
        href="https://github.com/donchriscorleone"
        target="_blank"
        className={styles.tag}
      >
        Github
      </a>
    </section>
  );
};

export default AboutMe;
