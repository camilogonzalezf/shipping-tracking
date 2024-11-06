/* Redux components */
import { createSlice } from "@reduxjs/toolkit";

/* Interfaces */
import { TrackingStateInterface } from "@/interfaces/slices";

const initialState: TrackingStateInterface = {
  obtainsTrackingState: false,
  trackingState: null,
  error: null,
};

const trackingState = createSlice({
  name: "trackingState",
  initialState,
  reducers: {
    getTrackingStateSuccess: (state, action) => {
      state.obtainsTrackingState = true;
      state.trackingState = action.payload;
      state.error = null;
    },
    getTrackingStateFailed: (state, action) => {
      state.obtainsTrackingState = false;
      state.error = action.payload;
    },
  },
});

export const { getTrackingStateSuccess, getTrackingStateFailed } =
  trackingState.actions;

export default trackingState.reducer;
