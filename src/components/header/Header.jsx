import React from "react";
import "./header.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function Header({ handleTheme1, theme1 }) {
  const handleTheme = (theme) => {
    handleTheme1(theme);
  };

  return (
    <>
      <div className={`header ${theme1 === "green" ? "head2" : ""}`}>
        <NavLink to="/">
          <img src="images/reader.svg" alt="" />
        </NavLink>
        <div className="headerMiddle">
          <NavLink to="profile">
            <div className={`headerBtn ${theme1 && "btn2"}`}>PROFILE</div>
          </NavLink>
          <NavLink to="/friends">
            <div className={`headerBtn ${theme1 && "btn2"}`}>READERS</div>
          </NavLink>
          <NavLink to="/books">
            <div className={`headerBtn ${theme1 && "btn2"}`}>BOOKS</div>
          </NavLink>
          <NavLink to="/news">
            <div className={`headerBtn ${theme1 && "btn2"}`}>NEWS</div>
          </NavLink>
          <NavLink to="/bookshelf">
            <div className={`headerBtn ${theme1 && "btn2"}`}>BOOKSHELF</div>
          </NavLink>
        </div>
        <div className={`headerBtn`}>
          <p id="" onClick={() => handleTheme("")}>
            Brown theme
          </p>
          <p
            id="green"
            onClick={() => handleTheme("green")}
            style={{ backgroundColor: "#248277" }}
          >
            Green theme
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
}
