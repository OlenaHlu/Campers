import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VehicleEquipment, VehicleType, FilterState } from "../types";

const initialState: FilterState = {
  location: "",
  equipment: [],
  type: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },

    setEquipmentFilter: (state, action: PayloadAction<VehicleEquipment>) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },

    setVehicleTypeFilter: (
      state,
      action: PayloadAction<VehicleType | null>
    ) => {
      state.type = state.type === action.payload ? null : action.payload;
    },

    resetAllFilters: (state) => {
      state.location = initialState.location;
      state.equipment = initialState.equipment;
      state.type = initialState.type;
    },
  },
});

export const {
  setEquipmentFilter,
  setLocationFilter,
  setVehicleTypeFilter,
  resetAllFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
