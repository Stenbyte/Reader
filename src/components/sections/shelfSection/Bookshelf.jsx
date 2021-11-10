import React, { useState } from "react";
import styles from "./misc.module.scss";
import axios from "axios";

export default function MisSec({ theme }) {
  let API = process.env.REACT_APP_API_KEY;
  console.log(process.env);
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const wordHandler = (e) => {
    setWord(e.target.value);
  };
  // console.log(word);
  const enterHandle = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API}`
        )
        .then((res) => {
          console.log(res.data[0]);
          setNewWord(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
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
            <input type="text" onChange={wordHandler} onKeyDown={enterHandle} />
            <span>Save Word</span>
            <div className={styles.description}>
              <h2>
                {newWord.hwi?.hw.toUpperCase()} <span>{newWord.fl}</span>
              </h2>
              <h4>Deffiniton</h4>
              <p>{newWord.fl}</p>
              <p>
                {/* Offensive: {newWord.meta?.offensive === false ? "No" : "Yes"}{" "} */}
              </p>
              <p>1: {newWord.shortdef ? newWord.shortdef[0] : ""} </p>
              <p>2: {newWord.shortdef ? newWord.shortdef[1] : ""} </p>
              <p>3: {newWord.shortdef ? newWord.shortdef[2] : ""} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
