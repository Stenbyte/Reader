import React, { useState } from "react";
import styles from "./bookmark.module.scss";
// import { useSelector } from "react-redux";
import bookImg from "../../../../img/book.png";
import Modal from "../../../modal/Modal";
import { bookmarkActions } from "../../../../store/bookmarkSlice";
import { useDispatch } from "react-redux";
import { buySliceActions } from "../../../../store/buyBook";

export default function Bookmark({ book, home }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const bookmarkHandler = () => {
    dispatch(
      bookmarkActions.remove({
        id: book.id,
      })
    );
  };
  const handleModal = () => {
    setModal(!modal);
  };
  const buyHandler = () => {
    dispatch(
      buySliceActions.buyBook({
        id: book.id,
        author: book.author,
        img: book.img,
        title: book.title,
        link: book.link,
        categories: book.categories,
        infoLink: book.infoLink,
        language: book.language,
        pages: book.pages,
        type: book.type,
        date: book.date,
        price: book.price,
        description: book.description,
      })
    );
  };
  return (
    <>
      <div className={styles.list} key={book.id} onClick={handleModal}>
        <img src={book.img ? book.img : bookImg} alt="" />
        <div className={styles.listInfo}>
          <h4> {book.author}</h4>
          {book.title}
        </div>
      </div>
      {modal && (
        <Modal home={home} handleModal={handleModal}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <img src={book.img ? book.img : bookImg} alt="" />
              <div className={styles.cardBottom}>
                <h4>Author :{book.author}</h4>
                <div>Category : {book?.categories}</div>
                <div className={styles.line}>
                  <a
                    href={book?.infoLink}
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Info
                  </a>
                  <a href={book?.link} alt="" target="_blank" rel="noreferrer">
                    Preview
                  </a>
                  <p onClick={bookmarkHandler}>Remove</p>
                  <p onClick={buyHandler}>Buy</p>
                </div>
                <div>Language : {book?.language.toUpperCase()}</div>
                <p>Pages : {book?.pages}</p>
                <p>Type : {book?.type}</p>

                <p>Date : {book?.date}</p>

                <div>
                  Price : {book.price}
                  {/* {card.saleInfo.listPrice?.currencyCode} */}
                </div>
              </div>
            </div>
            <div className={styles.description}>{book.description}</div>
          </div>
        </Modal>
      )}
    </>
  );
}
