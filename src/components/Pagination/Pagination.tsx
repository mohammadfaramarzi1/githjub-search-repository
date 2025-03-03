import styles from "./Pagination.module.css";

function Pagination({
  itemsPerPage,
  totalRepoCount,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const paginationItemCount = totalRepoCount.length / itemsPerPage;

  return (
    <div className={styles.pagination}>
      {totalRepoCount.length &&
        Array.from(
          { length: paginationItemCount },
          (pagination, index: number) => (
            <button
              key={index}
              className={currentPage === index + 1 ? styles.currentpage : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
    </div>
  );
}
export default Pagination;
