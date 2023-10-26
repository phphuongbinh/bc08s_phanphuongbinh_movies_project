import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import spinnerSlice from "./spinnerSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    spinnerSlice,
  },
});
