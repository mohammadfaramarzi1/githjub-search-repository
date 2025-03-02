export type Repo = {
  id: string;
  name: string;
  description: string;
  start: number;
};

export type RepoState = {
  repos: Repo[];
};
