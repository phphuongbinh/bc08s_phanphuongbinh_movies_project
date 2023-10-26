import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seat: [],
  detailSchedule: {},
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      state.seat.push(action.payload);
    },
    deselectSeat: (state, action) => {
      const index = state.seat.findIndex(
        (item) => item.maGhe === action.payload
      );
      state.seat.splice(index, 1);
    },
    selectSchedule: (state, action) => {
      state.detailSchedule = action.payload;
    },
  },
});

export const { selectSeat, selectSchedule, deselectSeat } = movieSlice.actions;

export default movieSlice.reducer;
