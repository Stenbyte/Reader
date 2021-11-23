import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BookSection from "./components/sections/bookSection/BookSection";
import Home from "./components/home/Home";
import ProfileSec from "./components/sections/profileSection/ProfileSec";
import NewsSec from "./components/sections/newsSection/NewsSec";
import Bookshelf from "./components/sections/shelfSection/Bookshelf";
import Friends from "./components/sections/friendsSection/Friends";
import Friend from "./components/sections/friendsSection/Friend";
import { useSelector } from "react-redux";

let isInitial = true;

function App() {
  const [theme, setTheme] = useState("");

  const friend = useSelector((state) => state.friend);
  // console.log(friend);
  useEffect(() => {
    const sendFriendData = async () => {
      const response = await fetch(
        "https://readerapp-85586-default-rtdb.europe-west1.firebasedatabase.app/friend.json",
        {
          method: "PUT",
          body: JSON.stringify(friend),
        }
      );
      if (!response.ok) {
        throw new Error("Ooops");
      }
      // const responseData = await response.json();
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendFriendData().catch((err) => console.log(err));
  }, [friend]);

  useEffect(() => {
    const current = sessionStorage.getItem("theme");

    if (current) {
      setTheme(current);
    }
  }, []);
  const handleTheme1 = (theme) => {
    setTheme(theme);
    sessionStorage.setItem("theme", theme);
  };
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
          <Route path="friends" element={<Friends theme={theme} />} />
          <Route path="friends/:friendId" element={<Friend theme={theme} />} />
          <Route path="news" element={<NewsSec theme={theme} />} />
          <Route path="bookshelf" element={<Bookshelf theme={theme} />} />
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
