import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState("");

  const handleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const current = localStorage.getItem("theme");
    if (current) {
      setTheme(current);
    }
  }, []);

  return (
    <>
      <div className={`header ${theme === "green" ? "head2" : ""}`}>
        <NavLink to="/">
          <img src="images/reader.svg" alt="" />
        </NavLink>
        <div className="headerMiddle">
          <NavLink to="profile">
            <div className={`headerBtn ${theme && "btn2"}`}>PROFILE</div>
          </NavLink>
          <NavLink to="/friends">
            <div className={`headerBtn ${theme && "btn2"}`}>FRIENDS</div>
          </NavLink>
          <NavLink to="/books">
            <div className={`headerBtn ${theme && "btn2"}`}>BOOKS</div>
          </NavLink>
          <NavLink to="/news">
            <div className={`headerBtn ${theme && "btn2"}`}>NEWS</div>
          </NavLink>
          <NavLink to="/misc">
            <div className={`headerBtn ${theme && "btn2"}`}>MISC</div>
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
