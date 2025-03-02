export type Repo = {
  id: string;
  name: string;
  description: string;
  start: number;
};

export type RepoState = {
  repo: Repo[] | null;
  loading: boolean;
  error: string | null;
};
