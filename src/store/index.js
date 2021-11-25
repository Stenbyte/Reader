import { configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    friend: friendSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
