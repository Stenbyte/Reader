import { createSlice } from "@reduxjs/toolkit";
import { Readers } from "../components/data";

const initialState = {
  friend: [],
  list: Readers,
};
const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
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
  },
});

export const friendActions = friendSlice.actions;
export default friendSlice;
