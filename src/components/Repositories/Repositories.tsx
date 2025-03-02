import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Repo from "../Repo/Repo";
import { Repo as RepoType } from "../../types/repo.types";

import styles from "./Repositories.module.css";

function Repositories() {
  const { error, loading, repos } = useSelector(
    (state: RootState) => state.repos
  );

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={styles.error}>Something went wrong!</p>}
      <div className={styles.repositories}>
        {repos &&
          repos.map((repo: RepoType) => <Repo key={repo.id} {...repo} />)}
      </div>
    </div>
  );
}

export default Repositories;
