import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Repo = {
  id: string;
  name: string;
  description: string;
  start: number;
};

type RepoState = {
  repos: Repo[];
};

const initialState: RepoState = {
  repos: [],
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
});

export const {} = repoSlice.actions;
export default repoSlice.reducer;
