import { configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";

const store = configureStore({
  reducer: {
    friend: friendSlice.reducer,
  },
});

export default store;
