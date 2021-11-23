import React, { useState, useRef } from "react";
import styles from "./shelf.module.scss";
import axios from "axios";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import MyBooks from "./MyBooks";
let musicList = [
  {
    id: 1,
    url:
      "https://www.youtube.com/watch?v=w9rzz4pDFwA&list=OLAK5uy_keyJA-JsoAdfCylvyyIQMRjenzX6MzmnE&index=20",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=A9sOb_r6Hy0",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=PdeoyBb8vhM",
  },
];

export default function MisSec({ theme }) {
  const BoughtBooks = useSelector((state) => state.friend.boughtBooks);
  // console.log(BoughtBooks);
  let API = process.env.REACT_APP_API_KEY;

  const [newWord, setNewWord] = useState("");
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [murl, setMurl] = useState(musicList);
  const wordRef = useRef();
  const musicRef = useRef();

  const enterHandle = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordRef.current.value}?key=${API}`
        )
        .then((res) => {
          setNewWord(res.data[0]);
          setLoad(true);
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);
        });
    }
  };

  const musicHandler = (e) => {
    if (e.key === "Enter" && musicRef.current.value.startsWith("https://www")) {
      setMurl((prevState) => {
        return [
          ...prevState,
          {
            id: Math.random() * 3,
            url: musicRef.current.value,
          },
        ];
      });
    }
  };

  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.component}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <h3>My Music</h3>
          </div>
          <div className={styles.music}>
            <input
              type="text"
              placeholder="Enter URL"
              onKeyDown={musicHandler}
              ref={musicRef}
            />
            <div className={styles.pl}>
              {murl.map((url) => (
                <ReactPlayer
                  controls={true}
                  width="350px"
                  height="220px"
                  url={url.url}
                  className={styles.play}
                  key={url.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerTop}>
            <h3>My Books</h3>
          </div>
          <div className={styles.centerBottom}>
            {BoughtBooks.map((book) => (
              <MyBooks key={book.id} book={book} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h3>Dictionary</h3>
          </div>
          <div className={styles.dic}>
            <input
              type="text"
              onKeyDown={enterHandle}
              ref={wordRef}
              placeholder="Search for a Word"
            />
            {loading && <p>Loading...</p>}
            {load && (
              <>
                <span className={styles.span}>Save Word</span>
                <div className={styles.description}>
                  <h2>
                    {newWord.hwi?.hw.toUpperCase()} <span>{newWord.fl}</span>
                  </h2>

                  <h4>Deffiniton</h4>
                  {/* <p>
                    Offensive:{" "}
                    {newWord.meta?.offensive === false ? "No" : "Yes"}
                  </p> */}
                  <p>1: {newWord.shortdef ? newWord.shortdef[0] : ""} </p>
                  <p>2: {newWord.shortdef ? newWord.shortdef[1] : ""} </p>
                  <p>3: {newWord.shortdef ? newWord.shortdef[2] : ""} </p>
                </div>
              </>
            )}
            {error}
          </div>
        </div>
      </div>
    </div>
  );
}
