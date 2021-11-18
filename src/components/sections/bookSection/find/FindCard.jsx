import React, { useState } from "react";
import styles from "./card.module.scss";
import Modal from "../../../modal/Modal";
import { useDispatch } from "react-redux";
import { bookmarkActions } from "../../../../store/bookmarkSlice";
export default function FindCard({ card }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const handleModal = () => {
    setModal(!modal);
  };
  const addHandler = () => {
    dispatch(
      bookmarkActions.addBook({
        id: card.id,
        author: card.volumeInfo.authors,
        img: card.volumeInfo?.imageLinks?.smallThumbnail,
        title: card.volumeInfo.title,
        link: card.volumeInfo?.previewLink,
        categories: card.volumeInfo?.categories,
        infoLink: card.volumeInfo?.infoLink,
        language: card.volumeInfo?.language,
        pages: card.volumeInfo?.pageCount,
        type: card.volumeInfo?.printType,
        date: card.volumeInfo?.publishedDate,
        price: card.saleInfo.listPrice?.amount,
        description: card.volumeInfo.description,
      })
    );
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            src={card.volumeInfo.imageLinks.smallThumbnail}
            alt=""
            onClick={handleModal}
          />
          <div className={styles.title}>
            <h4>Author: {card.volumeInfo?.authors}</h4>
            <p>Title: {card.volumeInfo?.title}</p>
            <div className={styles.box}>
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
              <p onClick={addHandler}>Add</p>
              <p>Buy</p>
            </div>
            <p>Language: {card.volumeInfo?.language.toUpperCase()}</p>
            <p>Pages: {card.volumeInfo?.pageCount}</p>
            <p>Type: {card.volumeInfo?.printType}</p>
            <p>Date: {card.volumeInfo?.publishedDate}</p>
            <p>
              Price: {card.saleInfo.listPrice?.amount}
              {card.saleInfo.listPrice?.currencyCode}
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

            {card.volumeInfo.description ? (
              card.volumeInfo.description
            ) : (
              <div>Sorry, there is no description</div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
