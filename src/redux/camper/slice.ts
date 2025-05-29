import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";
import { CampersState, Campers } from "./types";

const initialState: CampersState = {
  items: [],
  total: 0,
  isloading: false,
  error: null,
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
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<Campers>) => {
          state.error = null;
          state.isloading = false;
          state.items = action.payload.items;
          state.total = action.payload.total;
        }
      )
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
