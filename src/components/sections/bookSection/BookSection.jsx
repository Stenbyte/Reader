import React from "react";
import styles from "./BookSection.module.scss";
import NewRelease from "./new/NewRelease";
import FindBook from "./find/FindBook";
import Bookmarks from "./bookmark/Bookmarks";

export default function BookSection({ theme }) {
  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <NewRelease />
      <FindBook />
      <Bookmarks />
    </div>
  );
}
