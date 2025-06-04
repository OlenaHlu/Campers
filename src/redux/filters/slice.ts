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
      const equipmentId = action.payload;
      const index = state.equipment.indexOf(equipmentId);
      if (index === -1) {
        state.equipment.push(equipmentId);
      } else {
        state.equipment.splice(index, 1);
      }
    },

    setVehicleTypeFilter: (
      state,
      action: PayloadAction<VehicleType | null>
    ) => {
      if (state.type === action.payload) {
        state.type = null;
      } else {
        state.type = action.payload;
      }
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
