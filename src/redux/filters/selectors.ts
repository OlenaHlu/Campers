import { RootState } from "../store";

export const selectFilters = (state: RootState) => state.filters;

export const selectLocationFilter = (state: RootState) =>
  state.filters.location;

export const selectEquipmentFilter = (state: RootState) =>
  state.filters.equipment;

export const selectVehicleTypeFilter = (state: RootState) => state.filters.type;
