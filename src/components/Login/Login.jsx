import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import styles from "./login.module.scss";
import empty from "../../img/empty.png";

export default function Login() {
  const dispatch = useDispatch();

  const [proimg, setProimg] = useState({
    user: "",
    img: "",
  });
  const imageHandler = (e) => {
    setProimg((prevState) => ({
      user: e.target.value,
      img: prevState.img,
    }));
  };
  const imageHandler1 = (e) => {
    setProimg((prevState) => ({
      user: prevState.user,
      img: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const validImg = (e) => {
    e.preventDefault();
    sessionStorage.setItem("pro", JSON.stringify(proimg));
    sessionStorage.setItem("load", false);
    dispatch(
      userActions.loadUser({
        load: false,
      })
    );
  };

  return (
    <div className={styles.card}>
      <form onSubmit={validImg}>
        <h2>Login</h2>
        <input
          type="text"
          name="user"
          placeholder="enter your name"
          value={proimg.user}
          onChange={imageHandler}
          className={styles.us}
        />
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg , image/jpg"
          onChange={imageHandler1}
        />
        <img
          src={proimg.img === "" ? empty : proimg?.img}
          alt=""
          style={{ width: "30px", height: "40px" }}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
