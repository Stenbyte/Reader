import React, { useState, useEffect } from "react";
import styles from "./newR.module.scss";
import axios from "axios";

export default function NewRelease() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=java&orderBy=newest&maxResults=5&"
      )
      .then((res) => {
        console.log(res.data.items);
        setCards(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(card.volumeInfo);
  return (
    <div className={styles.new}>
      <h4 className={styles.title}>New Releases</h4>
      {cards.map((card) => (
        <div className={styles.list} key={card.id}>
          List of {card.volumeInfo.title}
        </div>
      ))}
    </div>
  );
}
