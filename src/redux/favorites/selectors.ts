import { RootState } from "../store";

export const selectIsFavorite = (camperId: string) => (state: RootState) =>
  state.favorites.items.some((item) => item.id === camperId);
