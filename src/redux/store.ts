import { configureStore } from "@reduxjs/toolkit";
import repoStoreReducer from "./repo/repo";
import favoriteRepos from "./favorites/favorites";

const store = configureStore({
  reducer: {
    repos: repoStoreReducer,
    favorites: favoriteRepos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
