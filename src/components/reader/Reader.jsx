import React, { useState } from "react";
import styles from "./reader.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { friendActions } from "../../store/friendSlice";

export default function Reader({ reader }) {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const addHandler = () => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);

    dispatch(
      friendActions.connectFriend({
        id: reader.id,
        name: reader.name,
        proImg: reader.proImg,
      })
    );
  };
  return (
    <>
      {open && (
        <div className={styles.container}>
          <img src={reader.proImg} alt="" className={styles.user} />

          <div className={styles.userInfo}>
            <h5>{reader.name}</h5>
          </div>
          <div className={styles.right}>
            <Link to={`/friends/${reader.id}`}>
              <div className={styles.profile}>profile</div>
            </Link>

            <div className={styles.connect} onClick={addHandler}>
              connect
            </div>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <div className={styles.rank}>{reader.rank}</div> */
}
