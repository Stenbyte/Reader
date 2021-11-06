import React from "react";
import styles from "./friend.module.scss";

export default function Friend({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      Friends
    </div>
  );
}
