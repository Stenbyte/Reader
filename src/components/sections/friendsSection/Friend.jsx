import React from "react";
import styles from "./friend.module.scss";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

export default function Friend() {
  const params = useParams();
  return (
    <div>
      Friend {params.friendId}
      {/* <Outlet /> */}
    </div>
  );
}
