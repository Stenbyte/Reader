import { createSlice, configureStore } from "@reduxjs/toolkit";
import friendSlice from "./friendSlice";

// const initialState = {
//   counter: 0,
//   showCounter: "hello",
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = "there";
//     },
//   },
// });

// const stateReducer = (state = initialState, action) => {
//   return {
//     counter: state.counter + 1,
//   };
// };

const store = configureStore({
  reducer: {
    // counter: counterSlice.reducer,
    friend: friendSlice.reducer,
  },
});
// export const counterActions = counterSlice.actions;

export default store;
