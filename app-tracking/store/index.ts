import { configureStore } from "@reduxjs/toolkit";

/* Reducers */
import terminalsListReducer from "../slices/terminalSlice";
import trackingInfoReducer from "../slices/trackingInfoSlice";
import trackingStateReducer from "../slices/trackingStateSlice";

export const store = configureStore({
  reducer: {
    terminalsList: terminalsListReducer,
    trackingInfo: trackingInfoReducer,
    trackingState: trackingStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
