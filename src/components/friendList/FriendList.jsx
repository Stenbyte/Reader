import React from "react";
import styles from "./creator.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { friendActions } from "../../store/friendSlice";

export default function FriendList({ friend }) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(friendActions.removeFriend({ id: friend.id }));
  };
  return (
    <div className={styles.container}>
      <img src={friend?.proImg} alt="" className={styles.user} />

      <div className={styles.userInfo}>
        <h5>{friend?.name}</h5>
      </div>
      <div className={styles.right}>
        <Link to={`/friends/${friend?.id}`}>
          <div className={styles.profile}>profile</div>
        </Link>
        <div className={styles.connect} onClick={remove}>
          remove
        </div>
        {/* <div className={styles.rank}>{reader.rank}</div> */}
      </div>
    </div>
  );
}
