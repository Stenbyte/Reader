import React from "react";
import styles from "./friend.module.scss";
import { useParams } from "react-router-dom";
import { Readers } from "../../data";
export default function Friend({ theme }) {
  const params = useParams();
  let user;
  user = Readers.find(({ id }) => id === +params.friendId);

  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img src={user.backImg} alt="" className={styles.backImg} />
          <img src={user.proImg} alt="" className={styles.front} />
          <h4>{user.name}</h4>
          <p className={styles.rank}>Rank: {user.rank}</p>
          <p>City: {user.location}</p>
        </div>
        <div className={styles.cardBottom}>
          <h4>Likes to read</h4>
          <p>
            <span>Categories:</span> {user.category.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
