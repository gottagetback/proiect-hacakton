import { City, Location, TrafficLight } from "@/app/models/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: City = {
  id: "",
  createdAt: "",
  name: "",
  trafficLights: [] as TrafficLight[],
  locations: [] as Location[],
};

const citySlice = createSlice({
  name: "cityState",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      return action.payload;
    },

    updateCity: (state, action: PayloadAction<Partial<City>>) => {
      Object.assign(state, action.payload);
    },

    setTrafficLights: (state, action: PayloadAction<TrafficLight[]>) => {
      state.trafficLights = action.payload;
    },

    updateTrafficLights: (state, action: PayloadAction<Partial<TrafficLight> | Partial<TrafficLight>[]>) => {
      const updates = Array.isArray(action.payload) ? action.payload : [action.payload];
      updates.forEach((update) => {
        const index = state.trafficLights.findIndex((t) => t.id === update.id);
        if (index > -1) {
          state.trafficLights[index] = { ...state.trafficLights[index], ...update };
        }
      });
    },

    clearCity: () => initialState,
  },
});

export const { setCity, updateCity, clearCity, setTrafficLights, updateTrafficLights } = citySlice.actions;

export default citySlice.reducer;
