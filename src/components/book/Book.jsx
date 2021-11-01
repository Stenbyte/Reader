import React from "react";
import styles from "./book.module.scss";

export default function Book({ title }) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
    </div>
  );
}
