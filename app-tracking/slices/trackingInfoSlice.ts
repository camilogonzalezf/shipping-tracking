/* Redux components */
import { createSlice } from "@reduxjs/toolkit";

/* Interfaces */
import { TrackingInfoInterface } from "@/interfaces/slices";

const initialState: TrackingInfoInterface = {
  obtainsTrackingInfo: false,
  trackingInfo: null,
  error: null,
};

const trackingInfo = createSlice({
  name: "trackingInfo",
  initialState,
  reducers: {
    getTrackingInfoSuccess: (state, action) => {
      state.obtainsTrackingInfo = true;
      state.trackingInfo = action.payload;
      state.error = null;
    },
    getTrackingInfoFailed: (state, action) => {
      state.obtainsTrackingInfo = false;
      state.error = action.payload;
    },
    resetTrackingInfo: (state) => {
      state.obtainsTrackingInfo = false;
      state.trackingInfo = null;
      state.error = null;
    },
  },
});

export const {
  getTrackingInfoSuccess,
  getTrackingInfoFailed,
  resetTrackingInfo,
} = trackingInfo.actions;

export default trackingInfo.reducer;
