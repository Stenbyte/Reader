import React from "react";
import styles from "./news.module.scss";
import st from "../../img/st.png";
export default function News() {
  return (
    <div className={styles.container}>
      <img src={st} alt="" />
      <p>
        Welcome to Reader App MVP. This is the static version of this app. The
        app will be updated as soon as one of the features will be implemented.
        The info about the feature will be displayed here. Thank you for your
        time. Sincerely, Sten Scheifel.
      </p>
    </div>
  );
}
