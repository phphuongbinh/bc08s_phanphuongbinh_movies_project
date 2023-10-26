import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, actions) => {
      console.log("loading true");
      state.isLoading = true;
    },
    setLoadingOff: (state, actions) => {
      console.log("loading false");
      state.isLoading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions;

export default spinnerSlice.reducer;
