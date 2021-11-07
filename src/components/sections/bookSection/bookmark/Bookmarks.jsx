import React from "react";
import styles from "./bookmark.module.scss";
export default function Bookmarks() {
  return (
    <div className={styles.bookmark}>
      <h4 className={styles.title}>Bookmarks</h4>
      <p>You don't have any bookmarks yet</p>
    </div>
  );
}
