import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seat: [],
  detailSchedule: {},
};

const movieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      state.seat.push(action.payload);
    },
    deselectSeat: (state, action) => {
      state.seat.filter((item) => !item.maGhe);
    },
    selectSchedule: (state, action) => {
      state.detailSchedule = action.payload;
    },
  },
});

export const { selectSeat, selectSchedule } = movieSlice.actions;

export default movieSlice.reducer;
