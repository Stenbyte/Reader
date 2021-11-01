import React from "react";
import styles from "./creator.module.scss";

export default function Creator({ title }) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
    </div>
  );
}
