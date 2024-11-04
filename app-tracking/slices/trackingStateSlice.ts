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
    resetTrackingState: (state) => {
      state.obtainsTrackingState = false;
      state.trackingState = null;
      state.error = null;
    },
  },
});

export const {
  getTrackingStateSuccess,
  getTrackingStateFailed,
  resetTrackingState,
} = trackingState.actions;

export default trackingState.reducer;
