import React, { useState, useEffect } from "react";
import "./header.scss";
import Home from "../home/Home";

export default function Header() {
  const [theme, setTheme] = useState("");
  const handleTheme = () => {
    theme === "green" ? setTheme("") : setTheme("green");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className={`header ${theme === "green" ? "head2" : ""}`}>
        <img src="images/reader.svg" alt="" />
        <div className="headerMiddle">
          <div className={`headerBtn ${theme === "green" ? "btn2" : ""}`}>
            PROFILE
          </div>
          <div className={`headerBtn ${theme === "green" ? "btn2" : ""}`}>
            FRIENDS
          </div>
          <div className={`headerBtn ${theme === "green" ? "btn2" : ""}`}>
            BOOKS
          </div>
          <div className={`headerBtn ${theme === "green" ? "btn2" : ""}`}>
            NEWS
          </div>
          <div className={`headerBtn ${theme === "green" ? "btn2" : ""}`}>
            MISC
          </div>
        </div>
        <div
          className={`headerBtn ${theme === "green" ? "btn2" : ""}`}
          onClick={handleTheme}
        >
          THEME
        </div>
      </div>
      <Home />
    </>
  );
}
