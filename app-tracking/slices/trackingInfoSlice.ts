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
  },
});

export const { getTrackingInfoSuccess, getTrackingInfoFailed } =
  trackingInfo.actions;

export default trackingInfo.reducer;
