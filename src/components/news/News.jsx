import React, { useState, useEffect } from "react";
import styles from "./news.module.scss";
import axios from "axios";
import Article from "../sections/newsSection/Article";
export default function News() {
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
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
    setLoad(false);
  }, [apiKey, load]);
  return (
    <div className={styles.container}>
      {load && <p>Loading...</p>}
      {post.map((article) => (
        <Article key={article._id} article={article} home="home" />
      ))}
      {error}
    </div>
  );
}
