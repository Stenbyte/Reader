import React from "react";
import styles from "./profileSec.module.scss";
import St from "../../../img/st.png";

export default function ProfileSec({ theme }) {
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
          <img src={St} alt="" className={styles.front} />
          <h4>Sten</h4>
          <p className={styles.rank}>Rank:</p>
          <p>City: Helsinki</p>
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
