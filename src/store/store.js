// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer, // Register the app slice
  },
});

export default store;
