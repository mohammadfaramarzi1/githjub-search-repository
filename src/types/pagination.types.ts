type PaginationProps = {
  totalRepoCount: Array<object>;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
