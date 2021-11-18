import React, { useState } from "react";
import styles from "./myBooks.module.scss";
import Modal from "../../modal/Modal";
import { bookmarkActions } from "../../../store/bookmarkSlice";

export default function MyBooks({ book }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img src={book.img} alt="" onClick={handleModal} />
          <div className={styles.title}>
            <h4>Author: {book.author}</h4>
            <p>Title: {book.title}</p>
            <div className={styles.box}>
              <a href={book.infoLink} alt="" target="_blank" rel="noreferrer">
                Info
              </a>
              <a href={book.link} alt="" target="_blank" rel="noreferrer">
                Preview
              </a>
            </div>
            <p>Language: {book.language.toUpperCase()}</p>
            <p>Pages: {book.pages}</p>
            <p>Type: {book.type}</p>
            <p>Date: {book.date}</p>
            <p>
              Price: {book.price}
              {/* {card.saleInfo.listPrice?.currencyCode} */}
            </p>
          </div>
        </div>
      </div>
      {modal && (
        <Modal handleModal={handleModal}>
          <div className={styles.description}>
            <div>
              <h3>Description</h3>
              <span onClick={handleModal}>X</span>
            </div>

            {book.description ? (
              book.description
            ) : (
              <div>Sorry, there is no description</div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
