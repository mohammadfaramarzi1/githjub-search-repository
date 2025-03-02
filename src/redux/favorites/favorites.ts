import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteRepos, Repo } from "../../types/repo.types";

const initialState: FavoriteRepos = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Repo>) => {
      if (!state.favorites.some((repo) => repo.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, action: PayloadAction<Repo>) => {
      state.favorites = state.favorites.filter(
        (repo) => repo.id !== action.payload.id
      );
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
