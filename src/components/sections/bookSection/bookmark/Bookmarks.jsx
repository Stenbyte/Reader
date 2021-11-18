import React from "react";
import styles from "./bookmark.module.scss";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark.jsx";
export default function Bookmarks({ home }) {
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);
  return (
    <div className={styles.bookmark}>
      <h4 className={styles.title}>Bookmarks</h4>
      {bookmarks.length === 0 && <p>You don't have any bookmarks yet</p>}
      {bookmarks.map((book) => (
        <>
          <Bookmark key={book.id} book={book} home={home} />
        </>
      ))}
    </div>
  );
}
