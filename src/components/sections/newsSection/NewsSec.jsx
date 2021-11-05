import React from "react";
import styles from "./newsSec.module.scss";

export default function NewsSec({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      News
    </div>
  );
}
