import { configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";
import bookmarkSlice from "./bookmarkSlice";
import buyBook from "./buyBook";

const store = configureStore({
  reducer: {
    friend: friendSlice.reducer,
    bookmark: bookmarkSlice.reducer,
    buyBook: buyBook.reducer,
  },
});

export default store;
