export type Repo = {
  id: string;
  name: string;
  description: string;
  star: number;
};

export type RepoState = {
  repos: Repo[] | null;
  loading: boolean;
  error: string | null;
};

export type FavoriteRepos = {
  favorites: Repo[];
};
