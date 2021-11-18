import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
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
    remove(state, action) {
      const newbook = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (book) => book.id !== newbook.id
      );
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice;
