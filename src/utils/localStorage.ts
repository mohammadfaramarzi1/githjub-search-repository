import { Repo as RepoType } from "../types/repo.types";

export const addFavoriteToLocalStorage = (value: RepoType) => {
  const existingFavoritesJSON = localStorage.getItem("favorites");
  const existingFavorites: RepoType[] = existingFavoritesJSON
    ? JSON.parse(existingFavoritesJSON)
    : [];

  const isAlreadyFavorite = existingFavorites.some(
    (fav) => fav.id === value.id
  );
  if (isAlreadyFavorite) return;

  const updatedFavorites = [...existingFavorites, value];

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

export const removeFavoriteFromLocalStorage = (value: RepoType) => {
  const existingFavoritesJSON = localStorage.getItem("favorites");
  const existingFavorites: RepoType[] = existingFavoritesJSON
    ? JSON.parse(existingFavoritesJSON)
    : [];

  const updatedFavorites = existingFavorites.filter(
    (fav) => fav.id !== value.id
  );

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
