import React from "react";
import styles from "./misc.module.scss";

export default function Misc({ title }) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
    </div>
  );
}
