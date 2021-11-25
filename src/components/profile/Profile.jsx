import React from "react";
import styles from "./profile.module.scss";

import empty from "../../img/empty.png";
import { Link } from "react-router-dom";

export default function Profile() {
  let data = sessionStorage.getItem("pro");
  let user = JSON.parse(data);

  return (
    <div className={styles.container}>
      <div className={styles.userTop}>
        <div className={styles.userLeft}>
          <img src={user ? user?.img : empty} alt="" />
          <Link to="/profile">
            <h4>{user?.user}</h4>
          </Link>
        </div>
        {/* <div className={styles.userRight}>
          <span>"We don't see things as they are, we see them as we are."</span>
          <p>Anais Nin</p>
        </div> */}
      </div>
      <div className={styles.userMiddle}>
        <div className={styles.middleContainer}>
          <p>
            Welcome to Reader App. This project is built with help of React,
            Firebase, Redux Toolkit, Google API, New York Times API, Merriam
            Webster API. The web app idea, planning, and implementation are made
            by me. Please enjoy:)
          </p>
        </div>
      </div>
      {/* <div className={styles.userBottom}>
        <div className={styles.bottomContainer}>
          <h4>Notes</h4>
        </div>
        <div className={styles.bottomContainer}>
          <h4>Continue Reading</h4>
        </div>
      </div> */}
    </div>
  );
}
