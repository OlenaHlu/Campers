import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";
import { CampersState } from "./types";

const initialState: CampersState = {
  items: [],
  total: 0,
  isloading: false,
  error: null,
  currentPage: 0,
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.error = null;
        state.isloading = false;
        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }
        state.total = action.payload.total;
        state.currentPage = action.meta.arg.page;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
