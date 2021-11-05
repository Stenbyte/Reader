import React from "react";
import styles from "./profileSec.module.scss";

export default function ProfileSec({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      Profile
    </div>
  );
}
