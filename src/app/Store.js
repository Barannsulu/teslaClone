import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../Features/Car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
