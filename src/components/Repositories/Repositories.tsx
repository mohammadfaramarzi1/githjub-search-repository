import Loader from "../Loader/Loader";
import Repo from "../Repo/Repo";
import { RepoState, Repo as RepoType } from "../../types/repo.types";

import styles from "./Repositories.module.css";
import { useEffect } from "react";

function Repositories({
  error,
  loading,
  repos,
  firstIndex,
  lastIndex,
}: RepoState) {

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={styles.error}>Something went wrong!</p>}
      <div className={styles.repositories}>
        {repos &&
          repos
            .slice(firstIndex, lastIndex)
            .map((repo: RepoType) => <Repo key={repo.id} {...repo} />)}
      </div>
    </div>
  );
}

export default Repositories;
