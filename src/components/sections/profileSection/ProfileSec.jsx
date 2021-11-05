import React, { useState, useEffect } from "react";
import styles from "./profileSec.module.scss";

export default function ProfileSec({ theme }) {
  // const [theme, setTheme] = useState("");
  // useEffect(() => {
  //   const current = localStorage.getItem("theme");
  //   if (current) {
  //     setTheme(current);
  //   }
  // }, []);
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      Profile
    </div>
  );
}
