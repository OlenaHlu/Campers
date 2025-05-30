import { RootState } from "../store";

export const selectCampers = (state: RootState) => state.campers.items;

export const selectTotalItems = (state: RootState) => state.campers.total;

export const selectIsLoading = (state: RootState) => state.campers.isloading;

export const selectError = (state: RootState) => state.campers.error;
