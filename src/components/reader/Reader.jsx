import React from "react";
import styles from "./reader.module.scss";
import Logo from "../../img/logo.png";
export default function Reader() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="" className={styles.user} />

      <div className={styles.userInfo}>
        <h5>UserName</h5>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>profile</div>
        <div className={styles.rank}>5</div>
      </div>
    </div>
  );
}
