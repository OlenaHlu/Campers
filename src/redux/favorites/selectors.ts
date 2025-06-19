import { RootState } from "../store";
import { Camper } from "../types";

export const selectIsFavorite = (camperId: string) => (state: RootState) =>
  state.favorites.items.some((item) => item.id === camperId);

export const selectFavoritesItems = (state: RootState): Camper[] =>
  state.favorites.items;
