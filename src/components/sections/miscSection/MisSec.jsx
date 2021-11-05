import React from "react";
import styles from "./misc.module.scss";

export default function MisSec({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      Misc
    </div>
  );
}
