import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model X", "Model Y", "Model S", "Model 3"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
