/* Redux components */
import { createSlice } from "@reduxjs/toolkit";

/* Interfaces */
import { TerminalsListSliceInterface } from "@/interfaces/slices";

const initialState: TerminalsListSliceInterface = {
  obtainsTerminals: false,
  terminalsList: [],
  error: null,
};

const terminalsList = createSlice({
  name: "terminalsList",
  initialState,
  reducers: {
    getTerminalsListSuccess: (state, action) => {
      state.obtainsTerminals = true;
      state.terminalsList = action.payload;
      state.error = null;
    },
    getTerminalsListFailed: (state, action) => {
      state.obtainsTerminals = false;
      state.error = action.payload;
    },
    resetTerminalsList: (state) => {
      state.obtainsTerminals = false;
      state.terminalsList = [];
      state.error = null;
    },
  },
});

export const {
  getTerminalsListSuccess,
  getTerminalsListFailed,
  resetTerminalsList,
} = terminalsList.actions;

export default terminalsList.reducer;
