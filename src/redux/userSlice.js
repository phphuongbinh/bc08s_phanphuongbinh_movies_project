import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/localServices";

const initialState = {
  info: userLocalStorage.get(),
  infoUserUpdate: {},
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    updateUser: (state, action) => {
      state.infoUserUpdate = action.payload;
    },
  },
});

export const { setInfo, updateUser } = userSlice.actions;

export default userSlice.reducer;
