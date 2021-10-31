import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="read">Reader</div>
        <div className="user">User</div>
        <div className="creator">Creator</div>
        <img src="images/pencil.svg" alt="" className="pencil" />
        <div className="book">Book</div>
        <div className="news">News</div>
        <div className="misc">Misc</div>
      </div>
    </div>
  );
}
