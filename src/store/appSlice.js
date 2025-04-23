// src/app/appSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = appSlice.actions; // Export actions
export default appSlice.reducer; // Export reducer
