import React from "react";
import styles from "./friend.module.scss";
import { useParams } from "react-router-dom";
// import { Readers } from "../../data";
import { useSelector } from "react-redux";
export default function Friend({ theme }) {
  let Readers = useSelector((state) => state.friend.list);
  let MyReaders = useSelector((state) => state.friend.friend);
  const params = useParams();

  let user = Readers.find((reader) => reader.id === +params.friendId);
  let my = MyReaders.find((reader) => reader.id === +params.friendId);
  // console.log(Readers.find((reader) => reader.id === +params.friendId));
  // console.log(MyReaders.find((reader) => reader.id === +params.friendId));
  // console.log(typeof +params.friendId);

  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            src={my?.backImg || user?.backImg}
            alt=""
            className={styles.backImg}
          />
          <img
            src={user?.proImg || my?.proImg}
            alt=""
            className={styles.front}
          />
          <h4>{user?.name || my?.name}</h4>
          <p className={styles.rank}>Rank: {user?.rank || my?.rank}</p>
          <p>City: {user?.location || my?.location}</p>
        </div>
        <div className={styles.cardBottom}>
          <h4>Likes to read</h4>
          <p>
            <span>Categories:</span>{" "}
            {user?.category.join(", ") || my?.category.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
