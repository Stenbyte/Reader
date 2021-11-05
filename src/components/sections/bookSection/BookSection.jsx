import React from "react";
import styles from "./BookSection.module.scss";
export default function BookSection({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      Book Section
    </div>
  );
}
