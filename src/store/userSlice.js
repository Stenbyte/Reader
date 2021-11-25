import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser(state, action) {
      state.load = action.payload.load;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
