import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import Repositories from "../components/Repositories/Repositories";
import Search from "../components/Search/Search";
import { RootState } from "../redux/store";
import { useState } from "react";

function MainPage() {
  const { error, loading, repos } = useSelector(
    (state: RootState) => state.repos
  );
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;

  return (
    <div>
      <Search />
      <Repositories
        error={error}
        loading={loading}
        repos={repos}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
      />
      {repos && (
        <Pagination
          totalRepoCount={repos}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default MainPage;
