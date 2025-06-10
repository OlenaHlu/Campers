import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper } from "../types";

type FavoritesState = {
  items: Camper[];
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Camper>) => {
      const toggledBtn = action.payload;
      const index = state.items.findIndex(
        (camper) => camper.id === toggledBtn.id
      );
      if (index === -1) {
        state.items.push(toggledBtn);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
