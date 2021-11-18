import { configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";
import bookmarkSlice from "./bookmarkSlice";

const store = configureStore({
  reducer: {
    friend: friendSlice.reducer,
    bookmark: bookmarkSlice.reducer,
  },
});

export default store;
