import React, { useState } from "react";
import styles from "./shelf.module.scss";
import axios from "axios";
import ReactPlayer from "react-player";

export default function MisSec({ theme }) {
  let API = process.env.REACT_APP_API_KEY;
  console.log(process.env);
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [music, setMusic] = useState("");
  const [url, setUrl] = useState("");

  const wordHandler = (e) => {
    setWord(e.target.value);
  };
  const enterHandle = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API}`
        )
        .then((res) => {
          setNewWord(res.data[0]);
          setLoad(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    }
  };
  const musicChange = (e) => {
    setMusic(e.target.value);
  };
  const musicHandler = (e) => {
    if (e.key === "Enter") {
      setUrl(music);
      setMusic("");
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
              onChange={musicChange}
              value={music}
            />
            <div className={styles.pl}>
              <ReactPlayer
                controls={true}
                width="350px"
                height="220px"
                url="https://www.youtube.com/watch?v=w9rzz4pDFwA&list=OLAK5uy_keyJA-JsoAdfCylvyyIQMRjenzX6MzmnE&index=20"
                className={styles.play}
              />
              <ReactPlayer
                controls={true}
                width="350px"
                height="220px"
                url="https://www.youtube.com/watch?v=A9sOb_r6Hy0"
                className={styles.play}
              />
              <ReactPlayer
                controls={true}
                width="350px"
                height="220px"
                url="https://www.youtube.com/watch?v=A9sOb_r6Hy0"
                className={styles.play}
              />
              <ReactPlayer
                controls={true}
                width="350px"
                height="220px"
                url="https://www.youtube.com/watch?v=A9sOb_r6Hy0"
                className={styles.play}
              />
              {url && (
                <ReactPlayer
                  controls={true}
                  width="350px"
                  height="220px"
                  url={url}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerTop}>
            <h3>My Books</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop} onClick={wordHandler}>
            <h3>Dictionary</h3>
          </div>
          <div className={styles.dic}>
            <input
              type="text"
              onChange={wordHandler}
              onKeyDown={enterHandle}
              placeholder="Search for a Word"
            />
            <span className={styles.span}>Save Word</span>
            <div className={styles.description}>
              <h2>
                {newWord.hwi?.hw.toUpperCase()} <span>{newWord.fl}</span>
              </h2>
              {loading && <p>Loading...</p>}
              {load && (
                <>
                  <h4>Deffiniton</h4>
                  <p>
                    Offensive:{" "}
                    {newWord.meta?.offensive === false ? "No" : "Yes"}
                  </p>
                  <p>1: {newWord.shortdef ? newWord.shortdef[0] : ""} </p>
                  <p>2: {newWord.shortdef ? newWord.shortdef[1] : ""} </p>
                  <p>3: {newWord.shortdef ? newWord.shortdef[2] : ""} </p>
                </>
              )}
              {error}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
