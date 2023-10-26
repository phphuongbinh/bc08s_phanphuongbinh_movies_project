import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/localServices";

const initialState = {
  info: userLocalStorage.get(),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setInfo } = userSlice.actions;

export default userSlice.reducer;
