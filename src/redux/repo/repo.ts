import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Repo, RepoState } from "../../types/repo.types";

const initialState: RepoState = {
  repos: null,
  loading: false,
  error: null,
};

export const fetchRepo = createAsyncThunk(
  "repos/fetchRepo",
  async (username: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      return data as Repo[];
    } catch (error) {
      throw new Error("something went wrong!");
    }
  }
);

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepo.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(fetchRepo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default repoSlice.reducer;
