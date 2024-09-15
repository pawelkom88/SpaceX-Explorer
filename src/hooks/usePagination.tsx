import { useState } from "react";

export function usePagination(initialLimit: number) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  const offset = (page - 1) * limit;

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  return { page, setPage,setLimit, limit, handleLimitChange, offset };
}
