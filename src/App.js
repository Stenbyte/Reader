import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BookSection from "./components/sections/bookSection/BookSection";
import Home from "./components/home/Home";
import ProfileSec from "./components/sections/profileSection/ProfileSec";
import NewsSec from "./components/sections/newsSection/NewsSec";
import MisSec from "./components/sections/miscSection/MisSec";
import Friends from "./components/sections/friendsSection/Friends";
import Friend from "./components/sections/friendsSection/Friend";
import AllFriends from "./components/sections/friendsSection/AllFriends";

function App() {
  const handleTheme1 = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
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
        <Route
          path="/"
          element={<Header handleTheme1={handleTheme1} theme1={theme} />}
        >
          <Route index element={<Home theme={theme} />} />
          <Route path="books" element={<BookSection theme={theme} />} />
          <Route path="profile" element={<ProfileSec theme={theme} />} />
          <Route path="friends" element={<Friends theme={theme} />}>
            <Route path=":friendId" element={<Friend />} />
          </Route>
          <Route path="news" element={<NewsSec theme={theme} />} />
          <Route path="misc" element={<MisSec theme={theme} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
