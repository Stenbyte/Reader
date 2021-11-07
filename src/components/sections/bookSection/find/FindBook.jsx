import React, { useState, useEffect } from "react";
import styles from "./find.module.scss";
import axios from "axios";
import FindCard from "./FindCard";

export default function FindBook() {
  const [book, setBook] = useState("");
  const [cards, setCards] = useState([]);
  const handleBook = (e) => {
    setBook(e.target.value);
  };
  console.log(book);
  const submitBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&filter=ebooks&maxResults=10`
      )
      .then((res) => {
        // console.log(res.data.items);
        setCards(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(cards);
  return (
    <div className={styles.find}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for a book"
          onChange={(e) => handleBook(e)}
        />
        <span onClick={submitBook}>Search</span>
      </div>
      <div className={styles.result}>
        {cards && cards.map((card) => <FindCard card={card} key={card.id} />)}
      </div>
    </div>
  );
}
