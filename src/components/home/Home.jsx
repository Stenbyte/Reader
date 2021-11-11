import React from "react";
import styles from "./home.module.scss";
import Reader from "../reader/Reader";
import Book from "../book/Book";
import Creator from "../creator/Creator";
// import Misc from "../misc/Misc";
import Profile from "../profile/Profile";
import News from "../news/News";
import { Readers } from "../data";
import { Link } from "react-router-dom";
export default function Home({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.home}>
        <div className={styles.read}>
          <div className={styles.more}>
            <h4>Readers you may know</h4>
            <Link to="/friends">
              <p>View all</p>
            </Link>
          </div>
          {Readers.map((reader) => (
            <Reader reader={reader} key={reader.id} />
          ))}
        </div>
        <div className={styles.user}>
          <Profile />
        </div>
        <div className={styles.creator}>
          <div className={styles.creator1}>Friends</div>
          {/* <Creator title="My Music" />
          <Creator title="Dictionary" />
          <Creator title="My Books" /> */}
        </div>
        <img src="images/pencil.svg" alt="" className={styles.pencil} />

        <div className={styles.book}>
          <Link to="/books">
            <div className={styles.bookTop}>Books</div>
          </Link>
          <Book title="Bookmarks" />
        </div>
        <div className={styles.news}>
          News
          <News />
        </div>
        <div className={styles.misc}>
          <div className={styles.misc1}>From the Creator</div>
          <Creator title="Book Suggestion" />
          <Creator title="Shop" />
          <Creator title="Music" />
          <Creator title="Quotes" />
        </div>
      </div>
    </div>
  );
}
