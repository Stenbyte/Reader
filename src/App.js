import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BookSection from "./components/sections/bookSection/BookSection";
import Home from "./components/home/Home";
import ProfileSec from "./components/sections/profileSection/ProfileSec";
import Friend from "./components/sections/friendsSection/Friend";
import NewsSec from "./components/sections/newsSection/NewsSec";
import MisSec from "./components/sections/miscSection/MisSec";

function App() {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const current = localStorage.getItem("theme");
    if (current) {
      setTheme(current);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home theme={theme} />} />
          <Route path="books" element={<BookSection theme={theme} />} />
          <Route path="profile" element={<ProfileSec theme={theme} />} />
          <Route path="friends" element={<Friend theme={theme} />} />
          <Route path="news" element={<NewsSec theme={theme} />} />
          <Route path="misc" element={<MisSec theme={theme} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
