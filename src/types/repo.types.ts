export type Repo = {
  id: string;
  name: string;
  description: string;
  star: number;
};

export type RepoState = {
  repo: Repo[] | null;
  loading: boolean;
  error: string | null;
};

export type FavoriteRepos = {
  favorites: Repo[];
};
