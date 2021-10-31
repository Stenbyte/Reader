import React from "react";
import "./header.scss";
import Home from "../home/Home";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src="images/reader.svg" alt="" />
        <div className="headerMiddle">
          <div className="headerBtn">PROFILE</div>
          <div className="headerBtn">FRIENDS</div>
          <div className="headerBtn">BOOKS</div>
          <div className="headerBtn">NEWS</div>
          <div className="headerBtn">MISC</div>
        </div>
        <div className="headerBtn">THEME</div>
      </div>
      <Home />
    </>
  );
}
