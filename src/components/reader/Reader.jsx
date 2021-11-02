import React from "react";
import styles from "./reader.module.scss";

export default function Reader({ reader }) {
  return (
    <div className={styles.container}>
      <img src={reader.proImg} alt="" className={styles.user} />

      <div className={styles.userInfo}>
        <h5>{reader.name}</h5>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>profile</div>
        <div className={styles.rank}>{reader.rank}</div>
      </div>
    </div>
  );
}
