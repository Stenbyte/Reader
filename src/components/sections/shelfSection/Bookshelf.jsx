import React from "react";
import styles from "./misc.module.scss";

export default function MisSec({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.component}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <h3>My Music</h3>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerTop}>
            <h3>My Books</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h3>Dictionary</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
