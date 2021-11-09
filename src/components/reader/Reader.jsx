import React from "react";
import styles from "./reader.module.scss";
import { Link } from "react-router-dom";

export default function Reader({ reader }) {
  return (
    <div className={styles.container}>
      <img src={reader.proImg} alt="" className={styles.user} />

      <div className={styles.userInfo}>
        <h5>{reader.name}</h5>
      </div>
      <div className={styles.right}>
        <Link to={`/friends/${reader.id}`}>
          <div className={styles.profile}>profile</div>
        </Link>
        <div className={styles.rank}>{reader.rank}</div>
      </div>
    </div>
  );
}
