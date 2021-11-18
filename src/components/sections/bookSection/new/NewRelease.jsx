import React, { useState, useEffect } from "react";
import styles from "./newR.module.scss";
import axios from "axios";
import ReleaseCard from "./ReleaseCard";

export default function NewRelease() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    setCards([]);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${category}+subject&filter=ebooks&orderBy=newest&maxResults=5&`
      )
      .then((res) => {
        setCards(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className={styles.new}>
      <h4 className={styles.title}>New Releases</h4>
      <div className={styles.category}>
        <div onClick={() => setCategory("Education")}>Education</div>
        <div onClick={() => setCategory("Fiction")}>Fiction</div>
        <div onClick={() => setCategory("Non-fiction")}>Non-fiction</div>
      </div>
      {loading && <p>Loading...</p>}
      {cards.map((card) => (
        <ReleaseCard card={card} key={card.id} />
      ))}
    </div>
  );
}
