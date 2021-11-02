import React from "react";
import styles from "./profile.module.scss";
import logo from "../../img/st.png";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.userTop}>
        <div className={styles.userLeft}>
          <img src={logo} alt="" />
          <h4>Sten Scheifel</h4>
          <p>Rank</p>
        </div>
        <div className={styles.userRight}>
          <span>"We don't see things as they are, we see them as we are."</span>
          <p>Anais Nin</p>
        </div>
      </div>
      <div className={styles.userMiddle}>
        <div className={styles.middleContainer}>
          <h4>Reading Time</h4>
        </div>
      </div>
      <div className={styles.userBottom}>
        <div className={styles.bottomContainer}>
          <h4>My Books</h4>
        </div>
        <div className={styles.bottomContainer}>
          <h4>Continue Reading</h4>
        </div>
      </div>
    </div>
  );
}
