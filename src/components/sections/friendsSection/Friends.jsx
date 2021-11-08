import React from "react";
import styles from "./friends.module.scss";
import AllFriends from "./AllFriends";
// import Friend from "./Friend";
import { Readers } from "../../data";

export default function Friends({ theme }) {
  return (
    <>
      <div
        className={`${styles.container} ${
          theme === "" ? "" : `${styles.hom1}`
        }`}
      >
        <div className={styles.con}>
          {Readers.map((reader) => (
            <AllFriends reader={reader} key={reader.id} />
          ))}
        </div>
      </div>
    </>
  );
}
