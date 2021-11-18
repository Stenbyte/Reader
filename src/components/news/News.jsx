import React from "react";
import styles from "./news.module.scss";
import st from "../../img/st.png";
export default function News() {
  return (
    <div className={styles.container}>
      <img src={st} alt="" />
      <p>
        Welcome to the Reader App. This is the app that I'm currently working
        on. All sections, except News, have their content. I'm using
        React-Redux, Google Books, and Merriam Webster APIs. Please enjoy, and
        thank you for your time.
        <br /> Sincerely, Sten Scheifel.
      </p>
    </div>
  );
}
