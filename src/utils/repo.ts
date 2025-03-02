import { Repo } from "../types/repo.types";

type isInFavoriteProps = {
  favoriteRepos: Repo[];
  repo: Repo;
};

export const isInFavorite = ({
  favoriteRepos,
  repo,
}: isInFavoriteProps): boolean => {
  const checkIsInFavorite = favoriteRepos.some(
    (favoriteRepo) => favoriteRepo.id === repo.id
  );
  return checkIsInFavorite;
};
