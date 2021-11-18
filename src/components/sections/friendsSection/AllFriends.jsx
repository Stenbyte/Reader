import React from "react";
import styles from "./all.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { friendActions } from "../../../store/friendSlice";
export default function AllFriends({ reader }) {
  const dispatch = useDispatch();
  const connectHandler = () => {
    dispatch(
      friendActions.connectFriend({
        id: reader.id,
        name: reader.name,
        proImg: reader.proImg,
        category: reader.category,
        rank: reader.rank,
        backImg: reader.backImg,
        location: reader.location,
      })
    );
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={reader.backImg} alt="" className={styles.backImg} />
        <Link to={`/friends/${reader.id}`}>
          <img src={reader.proImg} alt="proImg" className={styles.front} />
        </Link>
        <h4>{reader.name}</h4>
        <div className={styles.con}>
          <p className={styles.rank}>Rank: {reader.rank}</p>
          <p className={styles.con1} onClick={connectHandler}>
            Connect
          </p>
        </div>
        <p>City: {reader.location}</p>
      </div>
      <div className={styles.cardBottom}>
        <h4>Likes to read</h4>
        <p>
          <span>Categories:</span> {reader?.category?.join(", ")}
        </p>
      </div>
    </div>
  );
}
