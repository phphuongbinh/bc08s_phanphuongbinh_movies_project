import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    movieReducer: movieSlice,
  },
});
