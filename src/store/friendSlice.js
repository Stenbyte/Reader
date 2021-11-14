import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friend: [],
  show: true,
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
        });
      }
    },
    removeFriend(state, action) {
      const remove = action.payload;
      state.friend = state.friend.filter((frie) => frie.id !== remove.id);
      state.show = true;
    },
  },
});

export const friendActions = friendSlice.actions;
export default friendSlice;
