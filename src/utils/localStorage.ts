import { Repo } from "../types/repo.types";

export const addFavoriteToLocalStorage = (value: Repo) => {
  localStorage.setItem("favorites", JSON.stringify(value));
};

export const getFavoritesFromLocalStorage = () => {
  return localStorage.getItem("favorites");
};
