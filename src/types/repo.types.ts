export type Repo = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
};

export type RepoState = {
  repos: Repo[] | null;
  loading: boolean;
  error: string | null;
};

export type FavoriteRepos = {
  favorites: Repo[];
};
