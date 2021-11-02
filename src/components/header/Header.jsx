import React, { useState, useEffect } from "react";
import "./header.scss";
import Home from "../home/Home";

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
        <img src="images/reader.svg" alt="" />
        <div className="headerMiddle">
          <div className={`headerBtn ${theme && "btn2"}`}>PROFILE</div>
          <div className={`headerBtn ${theme && "btn2"}`}>FRIENDS</div>
          <div className={`headerBtn ${theme && "btn2"}`}>BOOKS</div>
          <div className={`headerBtn ${theme && "btn2"}`}>NEWS</div>
          <div className={`headerBtn ${theme && "btn2"}`}>MISC</div>
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
      <Home theme={theme} />
    </>
  );
}
