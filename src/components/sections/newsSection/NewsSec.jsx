import React, { useState, useEffect } from "react";
import styles from "./newsSec.module.scss";
import axios from "axios";
import Article from "./Article";

export default function NewsSec({ theme }) {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const apiKey = process.env.REACT_APP_NYT_KEY;
  useEffect(() => {
    setLoad(true);
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&api-key=${apiKey}`
      )
      .then((res) => {
        // res.data;
        setPost(res.data.response.docs);
        setLoad(false);
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  }, [apiKey]);

  return (
    <div
      className={`${styles.container} ${theme === "" ? "" : `${styles.hom1}`}`}
    >
      <div className={styles.card}>
        {load && <p>Loading...</p>}
        {post.map((article) => (
          <Article key={article._id} article={article} />
        ))}
        {error}
      </div>
    </div>
  );
}
