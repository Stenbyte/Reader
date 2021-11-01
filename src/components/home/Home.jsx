import React from "react";
import styles from "./home.module.scss";
import Reader from "../reader/Reader";
import Book from "../book/Book";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.read}>
          <div className={styles.more}>
            <h4>Readers you may know</h4>
            <p>View all</p>
          </div>
          <Reader />
          <Reader />
          <Reader />
          <Reader />
          <Reader />
        </div>
        <div className={styles.user}>User</div>
        <div className={styles.creator}>Creator</div>
        <img src="images/pencil.svg" alt="" className={styles.pencil} />
        <div className={styles.book}>
          <div className={styles.bookTop}>Books</div>
          <Book title="New Realeses" />
          <Book title="Find a book" />
          <Book title="Bookmarks" />
        </div>
        <div className={styles.news}>News</div>
        <div className={styles.misc}>Misc</div>
      </div>
    </div>
  );
}
