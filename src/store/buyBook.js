import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boughtBooks: [],
};

const buySlice = createSlice({
  name: "buyBook",
  initialState,
  reducers: {
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
  },
});

export const buySliceActions = buySlice.actions;
export default buySlice;
