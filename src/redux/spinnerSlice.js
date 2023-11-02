import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, actions) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, actions) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions;

export default spinnerSlice.reducer;
