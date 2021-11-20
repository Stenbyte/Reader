import React from "react";
import styles from "./home.module.scss";
import Reader from "../reader/Reader";
// import Book from "../book/Book";
import Creator from "../creator/Creator";
import Profile from "../profile/Profile";
import News from "../news/News";
// import { Readers } from "../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FriendList from "../friendList/FriendList";
import Bookmarks from "../sections/bookSection/bookmark/Bookmarks";

export default function Home({ theme }) {
  const Readers = useSelector((state) => state.friend.list);
  const friends = useSelector((state) => state.friend.friend);
  console.log(friends);

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
          {friends.length === 0 && (
            <p style={{ padding: "3rem" }}>Connect with others</p>
          )}
          {friends.map((friend) => (
            <FriendList friend={friend} key={friend.id} />
          ))}
        </div>
        {/* <img src="images/pencil.svg" alt="" className={styles.pencil} /> */}

        {/* <div className={styles.book}>
          <Bookmarks home="home" />
        </div> */}
        {/* <div className={styles.news}>
          <News />
        </div> */}
        {/* <div className={styles.misc}>
          <div className={styles.misc1}>From the Creator </div>
          <Creator title="Book Suggestion" />

          <Creator title="Music" />
          <Creator title="Quotes" />
        </div> */}
      </div>
    </div>
  );
}
