import { configureStore } from "@reduxjs/toolkit";
import homeSlice from './../Slices/HomeSlice';

export const store = configureStore({
  reducer: {
    Home: homeSlice,
  },
});