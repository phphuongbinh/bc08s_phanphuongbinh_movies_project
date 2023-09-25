import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      console.log(action);
      state.info = action.payload;
    },
  },
});

export const { setInfo } = userSlice.actions;

export default userSlice.reducer;
