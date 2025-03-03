import { isInFavoriteProps } from "../types/favorites.types";

export const isInFavorite = ({
  favoriteRepos,
  repo,
}: isInFavoriteProps): boolean => {
  const checkIsInFavorite = favoriteRepos.some(
    (favoriteRepo) => favoriteRepo.id === repo.id
  );
  return checkIsInFavorite;
};
