import React from "react";
import styles from "./newsSec.module.scss";

export default function NewsSec({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.card}>
        <img src="https://source.unsplash.com/1600x900/?nature,forest" alt="" />
      </div>
    </div>
  );
}
