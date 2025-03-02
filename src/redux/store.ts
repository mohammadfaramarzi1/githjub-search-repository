import { configureStore } from "@reduxjs/toolkit";
import repoStoreReducer from "./repo/repo";

const store = configureStore({
  reducer: {
    repos: repoStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
