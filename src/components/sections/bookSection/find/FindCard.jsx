import React from "react";
import styles from "./card.module.scss";
export default function FindCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={card.volumeInfo.imageLinks.smallThumbnail} alt="" />
        <div className={styles.title}>
          <h4>Author: {card.volumeInfo?.authors}</h4>
          <p>Title: {card.volumeInfo?.title}</p>
          <p>
            <a
              href={card.volumeInfo?.infoLink}
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              Info
            </a>
            <a
              href={card.volumeInfo?.previewLink}
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </p>
          <p>Language: {card.volumeInfo?.language.toUpperCase()}</p>
          <p>Pages: {card.volumeInfo?.pageCount}</p>
          <p>Type: {card.volumeInfo?.printType}</p>
          <p>Date: {card.volumeInfo?.publishedDate}</p>
          <p>
            Price: {card.saleInfo.listPrice?.amount}
            {card.saleInfo.listPrice?.currencyCode}
          </p>
        </div>
        {/* <div className={styles.description}>{card.volumeInfo.description}</div> */}
      </div>
    </div>
  );
}
