import React, { useState } from "react";
import styles from "./find.module.scss";
import axios from "axios";
import FindCard from "./FindCard";

export default function FindBook() {
  const [book, setBook] = useState("");
  const [cards, setCards] = useState([]);
  const handleBook = (e) => {
    setBook(e.target.value);
  };

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

  const Search = (e) => {
    if (e.key === "Enter") {
      submitBook(e);
    }
  };
  return (
    <div className={styles.find}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for a book"
          onChange={(e) => handleBook(e)}
          onKeyDown={Search}
        />
        <span onClick={submitBook}>Search</span>
      </div>
      <div className={styles.result}>
        {cards && cards.map((card) => <FindCard card={card} key={card.id} />)}
      </div>
    </div>
  );
}
