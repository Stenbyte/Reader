import React, { useState } from "react";
import styles from "./article.module.scss";
import Modal from "../../modal/Modal";

export default function Article({ article, home }) {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className={styles.cards} key={article._id} onClick={handleModal}>
        <div className={styles.article}>
          <h2>{article.headline.main}</h2>
          <span>{article.pub_date.slice(0, 10)}</span>
        </div>
      </div>
      {modal && (
        <Modal handleModal={handleModal} home={home}>
          <div className={styles.article1}>
            <h1>{article.headline.main}</h1>
            <span>{article.byline?.original}</span>
            <div className={styles.art}>
              <h3>{article.abstract}</h3>
              <p>
                {article.document_type}: {article.type_of_material}
              </p>
              <h2>{article.lead_paragraph}</h2>
              <span className={styles.date}>
                {article.pub_date.slice(0, 10)}
              </span>
              <a href={article.web_url} target="_blank" rel="noreferrer">
                Read
              </a>
              <h6>{article.source}</h6>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
