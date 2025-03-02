import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Repo } from "../../types/repo.types";

const initialState: Repo[] = [];

export const fetchRepo = createAsyncThunk(
  "repos/fetchRepo",
  async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    return data as Repo[];
  }
);

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default repoSlice.reducer;
