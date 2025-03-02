import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Repo from "../Repo/Repo";

function Repositories() {
  const { error, loading, repos } = useSelector(
    (state: RootState) => state.repos
  );
  console.log({ error, loading, repos });

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {/* {
        repos && repos.map(repo => <Repo key={repo.id} />)
      } */}
    </div>
  );
}

export default Repositories;
