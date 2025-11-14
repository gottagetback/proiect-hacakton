import { City } from "@/app/models/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initalState = {
  id: "",
  createdAt: "",
  name: "",
  intersections: [""],
};

const citySlice = createSlice({
  name: "cityState",
  initialState: initalState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      return action.payload;
    },
    updateCity: (state, action: PayloadAction) => {
      Object.assign(state, action.payload);
    },
    clearCity: () => {
      return initalState;
    },
  },
});

export const { setCity, updateCity, clearCity } = citySlice.actions;

export default citySlice.reducer;
