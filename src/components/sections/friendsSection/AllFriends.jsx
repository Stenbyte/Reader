import React from "react";
import styles from "./all.module.scss";
import { Link } from "react-router-dom";
export default function AllFriends({ reader }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={reader.backImg} alt="" className={styles.backImg} />
        <Link to={`/friends/${reader.id}`}>
          <img src={reader.proImg} alt="proImg" className={styles.front} />
        </Link>
        <h4>{reader.name}</h4>
        <p className={styles.rank}>Rank: {reader.rank}</p>
        <p>City: {reader.location}</p>
      </div>
      <div className={styles.cardBottom}>
        <h4>Likes to read</h4>
        <p>
          <span>Categories:</span> {reader.category.join(", ")}
        </p>
      </div>
    </div>
  );
}
