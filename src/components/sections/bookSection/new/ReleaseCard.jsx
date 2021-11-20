import React, { useState } from "react";
import styles from "./Rel.module.scss";
import book from "../../../../img/book.png";
import Modal from "../../../modal/Modal";
import { useDispatch } from "react-redux";
import { bookmarkActions } from "../../../../store/bookmarkSlice";
import { buySliceActions } from "../../../../store/buyBook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ReleaseCard({ card }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const notify = () =>
    toast.success("Thank you. Book is available in Bookshelf section");
  const handleModal = () => {
    setModal(!modal);
  };
  const bookmarkHandler = () => {
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
    notify();
  };
  return (
    <>
      <div className={styles.list} key={card.id} onClick={handleModal}>
        <img
          src={
            card.volumeInfo.imageLinks
              ? card.volumeInfo.imageLinks.smallThumbnail
              : book
          }
          alt=""
        />
        <div className={styles.listInfo}>
          <h4> {card.volumeInfo.authors}</h4>
          {card.volumeInfo.title}
        </div>
      </div>

      {modal && (
        <Modal handleModal={handleModal}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <img
                src={
                  card.volumeInfo.imageLinks
                    ? card.volumeInfo.imageLinks.smallThumbnail
                    : book
                }
                alt=""
              />
              <div className={styles.cardBottom}>
                <h4>Author :{card.volumeInfo?.authors}</h4>
                <div>Category : {card.volumeInfo?.categories}</div>
                <div className={styles.line}>
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
                  <button type="button" onClick={bookmarkHandler}>
                    Add to bookmarks
                  </button>
                  <button type="button" onClick={buyHandler}>
                    Buy
                  </button>
                  <ToastContainer autoClose={3000} />
                </div>
                <div>Language : {card.volumeInfo?.language.toUpperCase()}</div>
                <p>Pages : {card.volumeInfo?.pageCount}</p>
                <p>Type : {card.volumeInfo?.printType}</p>

                <p>Date : {card.volumeInfo?.publishedDate}</p>

                <div>
                  Price : {card.saleInfo.listPrice?.amount}
                  {card.saleInfo.listPrice?.currencyCode}
                </div>
              </div>
            </div>
            <div className={styles.description}>
              {card.volumeInfo.description}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
