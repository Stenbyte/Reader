import { createSlice } from "@reduxjs/toolkit";
import { Readers } from "../components/data";

const initialState = {
  friend: [],
  list: Readers,
  boughtBooks: [],
  bookmarks: [],
};
const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    replaceState(state, action) {
      state.friend = action.payload.friend;
      state.list = action.payload.list;
      state.boughtBooks = action.payload.boughtBooks;
      state.bookmarks = action.payload.bookmarks;
    },
    connectFriend(state, action) {
      const newFriend = action.payload;
      const status = state.friend.find(
        (friendId) => friendId.id === newFriend.id
      );

      if (!status) {
        state.friend.push({
          id: action.payload.id,
          name: action.payload.name,
          proImg: action.payload.proImg,
          category: action.payload.category,
          rank: action.payload.rank,
          backImg: action.payload.backImg,
          location: action.payload.location,
          //   con: action.payload.con,
        });
        // Updating list state
        state.list = state.list.filter((user) => user.id !== newFriend.id);
      }
    },
    removeFriend(state, action) {
      const remove = action.payload;
      state.friend = state.friend.filter((frie) => frie.id !== remove.id);
      state.list.push({
        id: action.payload.id,
        name: action.payload.name,
        proImg: action.payload.proImg,
        category: action.payload.category,
        rank: action.payload.rank,
        backImg: action.payload.backImg,
        location: action.payload.location,
        // con: action.payload.con,
      });
    },
    // Book section
    addBook(state, action) {
      const newBook = action.payload;
      const statusBook = state.bookmarks.find((book) => book.id === newBook.id);
      if (!statusBook) {
        state.bookmarks.push({
          id: action.payload.id,
          author: action.payload.author,
          img: action.payload.img,
          title: action.payload.title,
          link: action.payload.link,
          categories: action.payload.categories,
          infoLink: action.payload.infoLink,
          language: action.payload.language,
          pages: action.payload.pages,
          type: action.payload.type,
          date: action.payload.date,
          price: action.payload.price,
          description: action.payload.description,
        });
      }
    },
    buyBook(state, action) {
      const newBook = action.payload;
      const existingBook = state.boughtBooks.find(
        (book) => book.id === newBook.id
      );
      if (!existingBook) {
        state.boughtBooks.push({
          id: action.payload.id,
          author: action.payload.author,
          img: action.payload.img,
          title: action.payload.title,
          link: action.payload.link,
          categories: action.payload.categories,
          infoLink: action.payload.infoLink,
          language: action.payload.language,
          pages: action.payload.pages,
          type: action.payload.type,
          date: action.payload.date,
          price: action.payload.price,
          description: action.payload.description,
        });
      }
    },
    remove(state, action) {
      const newbook = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (book) => book.id !== newbook.id
      );
    },
  },
});

export const fetchData = () => {
  return async (dispatch) => {
    const fetchD = async () => {
      const response = await fetch(
        "https://readerapp-85586-default-rtdb.europe-west1.firebasedatabase.app/friend.json"
      );

      if (!response.ok) {
        throw new Error("Ooops");
      }
      const data = await response.json();

      return data;
    };
    try {
      const friendData = await fetchD();

      dispatch(friendActions.replaceState(friendData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const friendActions = friendSlice.actions;
export default friendSlice;
