import React from "react";
import styles from "./modal.module.scss";
import ReactDOM from "react-dom";

export default function Modal({ children, handleModal, home }) {
  const Back = ({ handleModal, home }) => {
    return (
      <div
        className={`${
          home === "home" ? `${styles.modal1}` : `${styles.modal}`
        }`}
        onClick={handleModal}
      />
    );
  };
  const Front = ({ children }) => {
    return <div>{children}</div>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Back handleModal={handleModal} home={home} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Front children={children} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
