import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operation";
import { CampersState, Campers, FilterState, Camper } from "../types";
import { filterCampers } from "../../utils/filterCampers";

const initialState: CampersState = {
  items: [],
  selectedCamper: null,
  displayedCampers: [],
  total: 0,
  isloading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 5,
  appliedFilters: {
    location: "",
    equipment: [],
    type: null,
  },
};

const handlePending = (state: CampersState) => {
  state.isloading = true;
  state.error = null;
};

const handleRejected = (
  state: CampersState,
  action: PayloadAction<string | undefined>
) => {
  state.isloading = false;
  state.error = action.payload ?? "Something went wrong";
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    applyFiltersAndPaginate: (state, action: PayloadAction<FilterState>) => {
      const filters = action.payload;
      state.appliedFilters = filters;
      const filteredResults = filterCampers(state.items, filters);
      state.total = filteredResults.length;
      state.currentPage = 1;
      state.displayedCampers = filteredResults.slice(0, state.itemsPerPage);
    },
    loadNextPage: (state) => {
      const fullFilteredList = filterCampers(state.items, state.appliedFilters);

      const nextPageIndex = state.currentPage;
      const startIndex = nextPageIndex * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      const newCampersToDisplay = fullFilteredList.slice(startIndex, endIndex);

      if (state.displayedCampers.length < state.total) {
        state.displayedCampers.push(...newCampersToDisplay);
        state.currentPage = nextPageIndex + 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<Campers>) => {
          state.isloading = false;
          state.error = null;
          state.items = action.payload.items;
          state.total = action.payload.total;
          state.displayedCampers = action.payload.items.slice(
            0,
            state.itemsPerPage
          );
          state.currentPage = 1;
          state.appliedFilters = { location: "", equipment: [], type: null };
        }
      )
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, (state) => {
        state.isloading = true;
        state.error = null;
        state.selectedCamper = null;
      })
      .addCase(
        fetchCamperById.fulfilled,
        (state, action: PayloadAction<Camper>) => {
          state.isloading = false;
          state.error = null;
          state.selectedCamper = action.payload;
        }
      )
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload as string;
        state.selectedCamper = null;
      });
  },
});

export const { applyFiltersAndPaginate, loadNextPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
