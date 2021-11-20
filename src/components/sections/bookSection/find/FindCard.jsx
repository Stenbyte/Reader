import React, { useState } from "react";
import styles from "./card.module.scss";
import Modal from "../../../modal/Modal";
import { useDispatch } from "react-redux";
import { bookmarkActions } from "../../../../store/bookmarkSlice";
import { buySliceActions } from "../../../../store/buyBook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function FindCard({ card }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Thank you. Book is available in Bookshelf section");
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
  const buyHandler = () => {
    notify();
    dispatch(
      buySliceActions.buyBook({
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
              <button onClick={addHandler} type="button">
                Add
              </button>
              <button type="button" onClick={buyHandler}>
                Buy
              </button>
              <ToastContainer autoClose={3000} />
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
