import { RootState } from "../store";
import { Camper } from "./types";

export const selectCampers = (state: RootState): Camper[] =>
  state.campers.items;

export const selectTotalItems = (state: RootState) => state.campers.total;

export const selectIsLoading = (state: RootState) => state.campers.isloading;

export const selectError = (state: RootState) => state.campers.error;

export const selectCurrentPage = (state: RootState) =>
  state.campers.currentPage;
