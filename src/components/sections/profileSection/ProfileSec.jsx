import React from "react";
import styles from "./profileSec.module.scss";
import proimg from "../../../img/empty.png";

export default function ProfileSec({ theme }) {
  let data = sessionStorage.getItem("pro");
  let user = JSON.parse(data);
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            src="https://source.unsplash.com/1600x900/?nature,forest"
            alt=""
            className={styles.backImg}
          />
          <img
            src={user.img ? user.img : proimg}
            alt=""
            className={styles.front}
          />
          <h4>{user.user}</h4>
        </div>
        <div className={styles.cardBottom}>
          <h4>Likes to read</h4>
          <p>
            <span>Categories:</span>
          </p>
        </div>
      </div>
    </div>
  );
}
