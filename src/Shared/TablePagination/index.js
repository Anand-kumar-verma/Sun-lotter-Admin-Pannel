import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export default function CustomTablePagination({
  page: currentPage,
  rowsPerPage: currentRowsPerPage,
}) {
  const [page, setPage] = React.useState(currentPage);
  const [rowsPerPage, setRowsPerPage] = React.useState(currentRowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
