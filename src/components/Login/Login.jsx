import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import styles from "./login.module.scss";
import empty from "../../img/empty.png";

export default function Login() {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const [proimg, setProimg] = useState({
    user: "",
    img: "",
  });
  const imageHandler = (e) => {
    setProimg((prevState) => ({
      user: e.target.value,
      img: prevState.img,
    }));
    if (e.target.value) {
      setError(false);
    }
  };
  const imageHandler1 = (e) => {
    setProimg((prevState) => ({
      user: prevState.user,
      img: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const validImg = (e) => {
    e.preventDefault();

    if (proimg.user === "") {
      setError(true);
    } else {
      sessionStorage.setItem("pro", JSON.stringify(proimg));
      sessionStorage.setItem("load", false);
      dispatch(
        userActions.loadUser({
          load: false,
        })
      );
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={validImg}>
        <h2>Login</h2>
        <label htmlFor="user">Name*</label>
        {error && <p>Please enter name</p>}
        <input
          type="text"
          name="user"
          placeholder="enter your name"
          value={proimg.user}
          onChange={imageHandler}
          className={styles.us}
        />
        <label htmlFor="image">Profile picture</label>
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg , image/jpg"
          onChange={imageHandler1}
        />
        <img
          src={proimg.img === "" ? empty : proimg?.img}
          alt=""
          style={{ width: "30px", height: "30px" }}
        />
        <button
          type="submit"
          // disabled={nameref.current?.value === "" ? true : false}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
